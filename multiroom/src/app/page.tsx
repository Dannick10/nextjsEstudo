'use client'

import { useState } from "react";

import Image from "next/image";
import Presente from "./components/Presente";
import Porta from "./components/Porta";
import PortaModel from "./model/porta";

export default function Home() {
  const [p1, Setp1] = useState(new PortaModel(1))

  return (

    <main className="flex items-center justify-center">
      <Porta porta={p1}/>
      
    </main>
  );
}
