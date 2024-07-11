import React from "react";

const RespostaComponent = ({ resposta, letra, indice, corletra }) => {
  console.log(resposta);
  return (
    <div className="flex p-2 max-w-[80vw] bg-white text-black font-bold rounded-md m-2 relative self-stretch">
      <div className="flex gap-2 items-center w-full min-w-72">
        <div className="h-[40px] w-[40px] flex justify-center items-center text-center rounded-full text-white" style={{ background: corletra }}>
          <p>{letra}</p>
        </div>
        <div className="">{resposta.valor}</div>
      </div>
    </div>
  );
};

export default RespostaComponent;
