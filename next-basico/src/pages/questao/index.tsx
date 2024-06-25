import React, { useEffect, useState } from "react";
import { json } from "stream/consumers";

const index = () => {
  const [questao, Setquestao] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/api/1")
      .then((res) => res.json())
      .then(Setquestao);
  }, []);

  const render = () => {
    if (questao) {
      return questao.resposta.map((resp, i) => {
        return <li key={i}>{resp}</li>;
      });
    }
    return false;
  };

  console.log(questao);

  return (
    <div>
      <h1>Questão</h1>
      <div>
        <span>{questao?.id} - {questao?.enunciado}</span>
        <ul>{render()}</ul>
      </div>
    </div>
  );
};

export default index;
