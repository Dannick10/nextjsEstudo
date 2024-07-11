import React from "react";
import EnunciadoComponent from "./EnunciadoComponent";
import RespostaComponent from "./RespostaComponent";

const QuestComponent = ({ props }) => {
  const renderizarResposta = () => {
    return props._respostas.map((resposta, i) => {
      return (
        <RespostaComponent
          resposta={resposta}
          letra={"A"}
          indice={i}
          corletra={"#F2C866"}
        />
      );
    });
  };

  return (
    <div className="flex flex-col items-center justify-around h-full gap-2">
      <EnunciadoComponent text={props._enunciado} />
      {renderizarResposta()}
    </div>
  );
};

export default QuestComponent;
