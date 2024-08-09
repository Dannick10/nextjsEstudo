import AuthInput from "@/components/auth/AuthInput";
import { IconeGoogle } from "@/components/icons";
import React, { useState } from "react";

type Props = {};

const autentificacao = (props: Props) => {
  const [modo, Setmodo] = useState<"login" | "cadastro">("login");
  const [email, SetEmail] = useState("");
  const [senha, SetSenha] = useState("");

  function submeter() {
    if (modo === "login") {
      console.log("login");
    } else {
      console.log("cadastrar");
    }
  }

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <div className="w-1/2">
        <h1 className={`text-xl font-bold mb-5 `}>
          {modo === "login"
            ? "Entre com a Sua Conta"
            : "Cadastre-se na plataforma"}
        </h1>
        <AuthInput
          label="Email"
          valor={email}
          tipo="email"
          valorMudou={SetEmail}
          obrigatorio
        />
        <AuthInput
          label="Senha"
          valor={senha}
          tipo="password"
          valorMudou={SetSenha}
          obrigatorio
        />
       
        <button
          onClick={submeter}
          className={`w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6`}
        >
          {modo === "login" ? "Entrar" : "Cadastrar"}
        </button>
        <hr className="my-6 border-gray-300 w-full" />
        <button
          onClick={submeter}
          className={`w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3  flex items-center justify-center gap-2`}
        >
          {IconeGoogle} Entrar com Google
        </button>
      </div>
    </div>
  );
};

export default autentificacao;
