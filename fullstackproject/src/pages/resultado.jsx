import React from "react";
import { Router, useRouter } from "next/router";
import Estatisticas from "@/components/Estatisticas";

const resultado = () => {
  const router = useRouter();

  const total = +router.query.total;
  const certas = +router.query.certas;
  const percentual = Math.round((certas / total) * 100);


  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
      <h2 className="text-2xl">Resultado</h2>
      <div className="flex gap-4 m-2">
        <Estatisticas texto={"perguntas"} valor={total} corFundo={'#9CD2A4'} />
        <Estatisticas texto={"certas"} valor={certas} corFundo={'#6760F0'} />
        <Estatisticas texto={"percentual"} valor={percentual} corFundo={'#6BE7F5'} />
      </div>
    </div>
  );
};

export default resultado;
