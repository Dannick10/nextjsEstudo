import React from "react";

type entradaProps = {
  texto: string;
  tipo?: "text" | "number";
  valor: any;
  somenteLeitura: boolean;
  valormudou?: (valor: any) => void
};

const Entrada = (props: entradaProps) => {
  return (
    <div className="flex flex-col gap-4">
      <label>{props.texto}</label>
      <input
        type={props.tipo ?? "text"}
        value={props.valor}
        readOnly={props.somenteLeitura}
        className="border border-purple-500 rounded-lg focus:outline-none px-4 py-2 bg-gray-100"
        onChange={e => props.valormudou?.(e.target.value)}
      />
    </div>
  );
};

export default Entrada;
