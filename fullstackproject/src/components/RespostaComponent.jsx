import React from "react";

const RespostaComponent = ({
  resposta,
  letra,
  indice,
  corletra,
  respostafornecida,
}) => {
  console.log(resposta);
  return (
    <div
      className="flex max-w-[80vw] bg-white text-black font-bold rounded-md m-2 relative self-stretch overflow-hidden"
      onClick={() => respostafornecida(indice)}
    >
      {!resposta.revelada ? (
        <div className="flex gap-2 items-center w-full min-w-72 p-4">
          <div
            className="h-[40px] w-[40px] flex justify-center items-center text-center rounded-full text-white"
            style={{ background: corletra }}
          >
            <p>{letra}</p>
          </div>
          <div className="">{resposta.valor}</div>
        </div>
      ) : (
        <div className="flex gap-2 items-center w-full min-w-72 relative">
          {resposta.certa ? (
            <div className="flex gap-2 items-center justify-center flex-1 bg-green-500 text-white rounded-md p-6 animation">
               <div>
                <p>A resposta certa... </p>
              </div>
              <div>
                <p>{resposta.valor}</p>
              </div>
            </div>
          ) : (
            <div className="flex gap-2 items-center justify-center flex-1 bg-red-500 text-white rounded-md p-6 animation">
              <div>
                <p>A resposta errada... </p>
              </div>
              <div>
                <p>{resposta.valor}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RespostaComponent;
