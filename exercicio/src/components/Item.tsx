import React from "react";

type Props = {
  conteudo: string;
};

const Item = (props: Props) => {
  return (
    <li
      style={{
        listStyle: "none",
        color: "green",
      }}
    >
      {props.conteudo}
    </li>
  );
};

export default Item;
