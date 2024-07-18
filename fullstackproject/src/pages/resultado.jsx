import React from "react";
import { Router, useRouter } from "next/router";
import Link from "next/link";
import Estatisticas from "@/components/Estatisticas";;

const resultado = () => {
  const router = useRouter();

  const total = +router.query.total;
  const certas = +router.query.certas;
  const percentual = Math.round((certas / total) * 100);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
      <h2 className="text-2xl">Resultado</h2>
      <div className="flex gap-4 py-11">
        <Estatisticas texto={"perguntas"} valor={total} corFundo={"#9CD2A4"} />
        <Estatisticas texto={"certas"} valor={certas} corFundo={"#6760F0"} />
        <Estatisticas
          texto={"percentual"}
          valor={percentual}
          corFundo={"#6BE7F5"}
        />
      </div>
      <Link href={"/"}>
        <button className="text-gray-500 bg-slate-200 rounded-md text-xs font-semibold tracking-widest py-5 px-10 shadow-md border-2 border-gray-400 hover:border-gray-300 transition-all  duration-300">
          Reniciar
        </button>
      </Link>
    </div>
  );
};

export default resultado;
