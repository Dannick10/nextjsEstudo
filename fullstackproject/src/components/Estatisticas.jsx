import React from "react";

const Estatisticas = ({ valor, texto, corFundo, corFonte }) => {
  const color = valor;
  console.log(color)


  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="bg-yellow-300 w-24 h-24 rounded-full flex items-center justify-center font-bold text-2xl"
        style={{
          backgroundColor: corFundo ?? "#FDD60F",
          color: corFonte ?? "#333",
        }}
      >
        <p>{valor}</p>
      </div>
      <div>
        <p>{texto}</p>
      </div>
    </div>
  );
};

export default Estatisticas;
