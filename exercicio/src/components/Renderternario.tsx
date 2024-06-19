import React from "react";

type Props = {
  numero: number;
};

const Renderternario = (props: Props) => {
  return props.numero % 2 ? <span>{props.numero}</span> : null;
};

export default Renderternario;
