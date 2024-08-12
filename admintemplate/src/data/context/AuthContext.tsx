import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/config";
import { GoogleAuthProvider, signInWithPopup, onIdTokenChanged, signOut } from "firebase/auth";
import Usuario from "@/model/Usuario";
import Router from "next/router";
import Cookies from "js-cookie";
import { cookies } from "next/headers";

interface AuthContextProps {
  usuario?: Usuario;
  loginGoogle: () => Promise<void>;
  carregando?: boolean
  logout?: () => Promise<void>
}

export const AuthContext = createContext<AuthContextProps>({});

async function usuarioNormalizado(usuarioFirebase: firebase.User) {
  const token = await usuarioFirebase.getIdToken();
  return {
    uid: usuarioFirebase.uid,
    nome: usuarioFirebase.displayName,
    email: usuarioFirebase.email,
    token,
    provedor: usuarioFirebase.providerData[0]?.providerId,
    imageUrl: usuarioFirebase.photoURL,
  };
}

function gerenciarCookie(logado: boolean) {
  if (logado) {
    Cookies.set('admin-template-code', String(logado), {
      expires: 7
    });
  } else {
    Cookies.remove('admin-template-code');
  }
}

export function AuthProvider(props) {
  const [carregando, setCarregando] = useState(true);
  const [usuario, setUsuario] = useState<Usuario>(null);

  async function loginGoogle() {
    const provider = new GoogleAuthProvider();
    const resp = await signInWithPopup(auth, provider);
    const user = await usuarioNormalizado(resp.user);
    configurarSession(resp.user);
    setUsuario(user);
    Router.push("/");
  }

  async function configurarSession(usuarioFirebase) {
    if (usuarioFirebase?.email) {
      setCarregando(false);
      const usuario = await usuarioNormalizado(usuarioFirebase);
      setUsuario(usuario);
      gerenciarCookie(true);
      return usuario.email;
    } else {
      setUsuario(null);
      gerenciarCookie(false);
      setCarregando(true);
      return false;
    }
  }
 async function logout() {
  try{
    setCarregando(true)
    await signOut(auth)
    await configurarSession(null)
  } finally {
    setCarregando(false)
  }

 }


  useEffect(() => {
    if(Cookies.get('admin-template-code')) {
      const cancelar = onIdTokenChanged(auth, configurarSession)
      return () => cancelar()
    } else {
      setCarregando(false)
    }
  },[])

  return (
    <AuthContext.Provider
      value={{
        usuario,
        loginGoogle,
        carregando,
        logout
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
