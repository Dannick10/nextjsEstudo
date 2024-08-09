import AuthInput from "@/components/auth/AuthInput";
import { IconeAtencao, IconeGoogle } from "@/components/icons";
import React, { useState } from "react";
import Image from "next/image";

type Props = {};

const autentificacao = (props: Props) => {
  const [modo, Setmodo] = useState<"login" | "cadastro">("login");
  const [email, SetEmail] = useState("");
  const [senha, SetSenha] = useState("");
  const [error, SetError] = useState(null)

  function submeter() {
    if (modo === "login") {
      console.log("login");
      exebiErro('Ocorreu um erro no login')
    } else {
        console.log("cadastrar");
        exebiErro('Ocorreu um erro no Cadastro')
    }
  }

  function exebiErro(msg?:any, tempoSegundos = 5) {
    SetError(msg)
     setTimeout(() => {SetError(null)}, tempoSegundos * 1000)
  }

  return (
    <div className="flex justify-center items-center h-screen transition-transform ">
      <div className="hidden md:block md:w-1/2 ">
        <img
          src="https://www.giffywalls.com/blog/wp-content/uploads/2023/01/mountain-wallpaper-for-walls-2048x1016.jpg"
          alt="image tela autentificação"
          className="h-screen object-cover"
        />
      </div>
      <div className="w-1/2 p-2">
        <h1 className={`text-xl font-bold mb-5 `}>
          {modo === "login"
            ? "Entre com a Sua Conta"
            : "Cadastre-se na plataforma"}
        </h1>
        {error ? 
        <div className="bg-red-400 py-3 px-5 text-white rounded-lg flex items-center">
            {IconeAtencao}
            <span className="ml-3">{error}</span>
        </div>
        : null}
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
        {modo === "login" ? (
          <p className="mt-8">
            Novo por aqui ?
            <a
              onClick={() => Setmodo("cadastro")}
              className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"
            > crie uma conta ?</a>
          </p>
        ) : (
          <p className="mt-8">
            Já faz parte da nossa comunidade?
            <a
              onClick={() => Setmodo("login")}
              className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"
            > Entre com as suas credenciais ?</a>
          </p>
        )}
      </div>dd
    </div>
  );
};

export default autentificacao;
