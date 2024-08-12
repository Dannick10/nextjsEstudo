import { promises } from "dns";
import firebase from "../../firebase/config";
import { createContext, useState } from "react";
import Usuario from "@/model/Usuario";
import Router from "next/router";

interface AuthContextProps {
  usuario?: Usuario;
  loginGoogle: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>({});

async function usuarioNormalizado(usuarioFirebase: firebase.user){
    const token = await usuarioFirebase.getIdToken()
    return {
        uid: usuarioFirebase.uid,
        nome: usuarioFirebase.displayName,
        email: usuarioFirebase.email,
        token,
        provedor: usuarioFirebase.providerData[0].providerId,
        imageUrl: usuarioFirebase.phtoURL
    }
}

export function AuthProvider(props) {

    const [usuario, Setusuario] = useState<Usuario>(null)

    async function loginGoogle() {
        const resp = await firebase.auth().signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
        )
        const usuario = await usuarioNormalizado(resp.user)
        Setusuario(usuario)
        Router.push('/')
    }

  return (
    <AuthContext.Provider value={{
        usuario,
        loginGoogle
    }}>{props.children}</AuthContext.Provider>
  );
}
