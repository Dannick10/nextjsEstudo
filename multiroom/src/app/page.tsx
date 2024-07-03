"use client";

import { useState } from "react";

import Image from "next/image";
import Presente from "./components/Presente";
import Porta from "./components/Porta";
import PortaModel from "./model/porta";
import { criarPortas, atualizarPortas } from "./components/criarPortas";

export default function Home() {
  const [p1, Setp1] = useState(new PortaModel(1));
  const [text, Settext] = useState("...");

  const [portas, SetPortas] = useState(criarPortas(5, 2));
  console.log(portas)
  function renderizarPortas() {
    return portas.map(porta => {
        return <Porta key={porta.numero} value={porta}
            onChange={novaPorta => SetPortas(atualizarPortas(portas, novaPorta))} />
    })
}

  return (
    <main className="flex items-center justify-center">{renderizarPortas()}</main>
  );
}
