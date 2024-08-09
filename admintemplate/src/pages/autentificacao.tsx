import AuthInput from "@/components/auth/AuthInput";
import React, { useState } from "react";

type Props = {};

const autentificacao = (props: Props) => {
const [modo, Setmodo] = useState<'login' | 'cadastro'>('login')
  const [email, SetEmail] = useState("");
  const [senha, SetSenha] = useState("");

  return (
    <div>
      <h1>Autentificação</h1>
      <AuthInput label="Email" valor={email} tipo="email" valorMudou={SetEmail} obrigatorio/>
      <AuthInput label="Senha" valor={senha} tipo="password" valorMudou={SetSenha} obrigatorio/>
      <AuthInput label="Senha" valor={senha} tipo="password" valorMudou={SetSenha} obrigatorio/>

    </div>
  );
};

export default autentificacao;
