import { promises } from "dns";
import firebase from "../../firebase/config";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/config";
import { GoogleAuthProvider, signInWithPopup, onIdTokenChanged } from "firebase/auth";
import Usuario from "@/model/Usuario";
import Router from "next/router";
import Cookies from "js-cookie";

interface AuthContextProps {
  usuario?: Usuario;
  loginGoogle: () => Promise<void>;
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
      const usuario = await usuarioNormalizado(usuarioFirebase);
      setUsuario(usuario);
      gerenciarCookie(true);
      setCarregando(false);
      return usuario.email;
    } else {
      setUsuario(null);
      gerenciarCookie(false);
      setCarregando(true);
      return false;
    }
  }

  useEffect(() => {
    const cancelar = onIdTokenChanged(auth, configurarSession)
    return () => cancelar()
  },[])

  return (
    <AuthContext.Provider
      value={{
        usuario,
        loginGoogle,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
