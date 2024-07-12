import React from "react";
import EnunciadoComponent from "./EnunciadoComponent";
import RespostaComponent from "./RespostaComponent";
import TemporizadorComponent from "./TemporizadorComponent";

const letras = [
  {valor: 'A', cor: '#F2C866'},
  {valor: 'B', cor: '#F266BA'},
  {valor: 'C', cor: '#85D4F2'},
  {valor: 'D', cor: '#BCE596'},
]

const QuestComponent = ({ props, respostafornecida,tempoesgotado }) => {
  const renderizarResposta = () => {
    return props._respostas.map((resposta, i) => {
      return (
        <RespostaComponent
          key={i}
          resposta={resposta}
          letra={letras[i].valor}
          indice={i}
          corletra={letras[i].cor}
          respostafornecida={respostafornecida}
        />
      );
    });
  };


  return (
    <div className="flex flex-col items-center justify-around h-full gap-2">
      <EnunciadoComponent text={props._enunciado} />
      <TemporizadorComponent duracao={10} tempoEsgotado={tempoesgotado}/>
      {renderizarResposta()}
    </div>
  );
};

export default QuestComponent;
