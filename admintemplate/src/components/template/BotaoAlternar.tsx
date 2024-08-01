import React from "react";
import { IconeSol, IconeLua } from "../icons";

type botalAlternarTema = {
  tema: string;
  alternarTema: () => void;
};

const BotaoAlternar = (props: botalAlternarTema) => {
  return props.tema === "dark" ? (
    <div onClick={props.alternarTema}>
      <div>{IconeSol}</div>
      <div>
        <span>Claro</span>
      </div>
    </div>
  ) : (
    <div onClick={props.alternarTema}>
      <div>{IconeSol}</div>
      <div>
        <span>Claro</span>
      </div>
    </div>
  );
};

export default BotaoAlternar;
