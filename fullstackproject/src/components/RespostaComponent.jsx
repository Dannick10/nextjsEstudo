import React from "react";

const RespostaComponent = ({ resposta, letra, indice, corletra }) => {
  console.log(resposta);
  return (
    <div className="flex p-2">
      <div className="">
        <div className="" style={{ background: corletra }}>
          {letra}
        </div>
        <div className="">{resposta.valor}</div>
      </div>
    </div>
  );
};

export default RespostaComponent;
