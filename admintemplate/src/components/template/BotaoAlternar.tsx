import React from "react";
import { IconeSol, IconeLua } from "../icons";

type botalAlternarTema = {
  tema: string;
  alternarTema: () => void;
};

const BotaoAlternar = (props: botalAlternarTema) => {
  return props.tema !== "dark" ? (
    <div onClick={props.alternarTema} className={`bg-gradient-to-r from-yellow-300 to-yellow-600 gap-2 lg:w-24 h-8 felx items-center hidden sm:flex w-14 rounded-full p-1 cursor-pointer`}>
      <div className={`flex items-center justify-center bg-white text-yellow-600 w-6 h-6 rounded-full`}>{IconeSol}</div>
      <div>
        <span>Claro</span>
      </div>
    </div>
  ) : (
    <div onClick={props.alternarTema}  className={`bg-black text-white lg:w-24 h-8  items-center hidden sm:flex gap-2 justify-end w-14 rounded-full p-1 cursor-pointer`}>
      <div className="">
        <span>Escuro</span>
      </div>
      <div className={`flex items-center justify-center bg-white text-yellow-300 w-6 h-6 rounded-full`}>{IconeLua}</div>
    </div>
  );
};

export default BotaoAlternar;
