import { promises } from "dns";
import firebase from "../../firebase/config";
import { createContext, useState } from "react";
import Usuario from "@/model/Usuario";

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
        console.log('login google...')
    }

  return (
    <AuthContext.Provider value={{
        usuario,
        loginGoogle
    }}>{props.children}</AuthContext.Provider>
  );
}
