"use client";

import { useState, useEffect } from "react";

import Porta from "../../components/Porta";
import PortaModel from "../../app/model/porta";
import { criarPortas, atualizarPortas } from "../../components/criarPortas";
import "../../app/globals.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function game() {
  const [p1, Setp1] = useState(new PortaModel(1));
  const [text, Settext] = useState("...");

  const [portas, SetPortas] = useState(criarPortas(10, 5));
  const router = useRouter()
  
  useEffect(() => {
    const portas = +!router.query.portas 
    const presente = +!router.query.tempresente == 0 ? Math.floor(Math.random()*portas) : +!router.query.tempresente


      SetPortas(criarPortas(portas,presente))

  },[router?.query])

  function renderizarPortas() {
    return portas.map(porta => {
        return <Porta key={porta.numero} value={porta}
            onChange={novaPorta => SetPortas(atualizarPortas(portas, novaPorta))} />
    })
}

  return (
    <main className="flex items-center justify-center flex-wrap gap-2 p-2">{renderizarPortas()}</main>
  );
}
