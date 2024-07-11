import React from "react";

const RespostaComponent = ({ resposta, letra, indice, corletra }) => {
  console.log(resposta);
  return (
    <div className="flex p-2 bg-white text-black font-bold rounded-md">
      <div className="flex justify-between items-center min-w-52">
        <div className="h-[40px] w-[40px] flex justify-center items-center text-center rounded-full" style={{ background: corletra }}>
          <p>{letra}</p>
        </div>
        <div className="">{resposta.valor}</div>
      </div>
    </div>
  );
};

export default RespostaComponent;
