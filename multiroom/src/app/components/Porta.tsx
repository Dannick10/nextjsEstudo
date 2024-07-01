import React, { useState } from "react";

import PortaModel from "../model/porta";

type portaProps = {
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void
};

const Porta = (props: portaProps) => {

  const porta = props.value
  const selecionada = porta.selecionada

  const alternarSelecao = e => props.onChange(porta.alternarSelecao())



  return (
    <div className="flex justify-center w-[200px] h-[300px] relative" onClick={alternarSelecao}>
      <div className={`flex flex-col bg-orange-600 items-center p-10 text-white flex-grow-1 border-4 border-red-700 border-b-0 ${selecionada ? 'border-yellow-300': ''}`}>
        <div className="flex flex-col bg-orange-600 items-center p-10 text-white flex-grow-1" ></div>
        <div className={`text-5xl ${selecionada ? 'text-yellow-300': ''}`}>{porta.numero}</div>
      </div>
        <div className="bg-white flex-gro-1 absolute h-[1em] w-[100%] bottom-0"></div>
        <div className={`flex flex-col bg- items-centerflex-grow-1 absolute h-[1.2em] w-[1.2em] bg-orange-900 right-8 rounded-full top-[50%] ${selecionada ? 'bg-yellow-300': ''}`}></div>
    </div>
  );
};

export default Porta;
