import React, { useState } from "react";

type Props = {};

const _mouse = (props: Props) => {
  let [x, setX] = useState(0);
  let [y, SetY] = useState(0);

  const quandoMover = (ev: React.MouseEvent) => {
    console.log(ev.clientX, ev.clientY);
   setX(ev.clientX)
   SetY(ev.clientY)
  };

  return (
    <div onMouseMove={quandoMover}>
      <h2>Mouse</h2>
      <p>eixo {x}</p>
      <p>eixo {y}</p>
    </div>
  );
};

export default _mouse;
