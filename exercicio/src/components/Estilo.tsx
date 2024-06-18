import React from "react";

interface Props {
  color: number;
}

const Estilo = ({ color }: Props) => {
  return (
    <div>
      <h1
        style={
          color <= 0
            ? { color: "blue" }
            : color >= 10
            ? { color: "red" }
            : { color: "green" }
        }
      >
        texto
      </h1>
    </div>
  );
};

export default Estilo;
