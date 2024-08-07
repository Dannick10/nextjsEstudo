import React from "react";

type TituloProps = {
  titulo: string;
  subtitulo: string;
};
const Titulo = (props: TituloProps) => {
  return (
    <div>
      <h1
        className={`
          font-black text-3xl text-gray-900 dark:text-gray-200
        `}
      >
        {props.titulo}
      </h1>
      <h2 className={`font-light text-sm text-gray-600 dark:text-gray-400`}>{props.subtitulo}</h2>
    </div>
  );
};

export default Titulo;
