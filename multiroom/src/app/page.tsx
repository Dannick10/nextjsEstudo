'use client'

import { useState } from "react";

import Image from "next/image";
import Presente from "./components/Presente";
import Porta from "./components/Porta";
import PortaModel from "./model/porta";
import { CriarPortas } from "./components/criarPortas";

export default function Home() {
  const [p1, Setp1] = useState(new PortaModel(1))
  const [text,Settext] = useState('...')
  console.log(p1)
  p1.abrir()

  console.log(CriarPortas(3,2))
  return (

    <main className="flex items-center justify-center flex-col">
      <input type="text" value={text} onChange={(e) => Settext(e.target.value)}/>

     
      <Porta value={p1} onChange={novaPorta => Setp1(novaPorta)}/>
      
    </main>
  );
}
