import { promises } from "dns";
import firebase from "../../firebase/config";
import { createContext, useState } from "react";
import { auth } from "../../firebase/config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Usuario from "@/model/Usuario";
import Router from "next/router";

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

export function AuthProvider(props) {
  const [usuario, Setusuario] = useState<Usuario>(null);

  async function loginGoogle() {
    const provider = new GoogleAuthProvider();
    const resp = await signInWithPopup(auth, provider);
    const user = await usuarioNormalizado(resp.user);
    Setusuario(user);
    Router.push("/");
  }

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
