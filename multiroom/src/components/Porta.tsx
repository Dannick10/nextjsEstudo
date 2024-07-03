import React, { useState } from "react";

import PortaModel from "../app/model/porta";
import Presente from "./Presente";

type portaProps = {
  value: PortaModel;
  onChange: (novaPorta: PortaModel) => void;
};

const Porta = (props: portaProps) => {
  const porta = props.value;
  const selecionada = porta.selecionada;

  const alternarSelecao = (e:any) => props.onChange(porta.alternarSelecao());

  const abrir = (e:any) => {
    e.stopPropagation();

    props.onChange(porta.abrir());
  };

  return (
    <div
      className="flex justify-center w-[200px] h-[300px] relative"
      onClick={alternarSelecao}
    >
       
       
      <div
        className={`flex flex-col w-44 items-center p-10 text-white flex-grow-1 border-4 bg-orange-950 border-red-700 border-b-0 `}
        >
         
          {porta.aberta && porta.presente && <div className="absolute h-[80%] flex flex-col-reverse"><Presente /></div>}
          {porta.aberta  ? false : (
            <>
            <div className={`flex flex-col bg-orange-600 border-4 border-red-700 w-44 h-full top-0 absolute items-center p-10 text-white flex-grow-1 ${selecionada ? 'border-yellow-300':''}`}></div>
            <div className={`text-5xl z-10 ${selecionada ? "text-yellow-300" : ""}`}>
              {porta.numero}
            </div>
            <div
            className={`flex flex-col bg- items-centerflex-grow-1 absolute h-[1.2em] w-[1.2em] bg-orange-900 right-8 rounded-full top-[50%] ${
              selecionada ? "bg-yellow-300" : ""
            }`}
            onClick={abrir}
            ></div>
            </>
          )}
      </div>
      <div className="bg-white flex-gro-1 absolute h-[1em] w-[100%] bottom-0"></div>
    </div>
  );
};

export default Porta;
