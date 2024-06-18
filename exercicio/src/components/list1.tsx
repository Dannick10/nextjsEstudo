import { Span } from "next/dist/trace";
import { list } from "postcss";
import React from "react";

const List1 = () => {
  const generate = (num: number) => {
    const list = [];
    for (let i = 0; i <= num; i++) {
      list.push(<span>{i + 1},</span>);
    }
    return list;
  };

  return <div>{generate(10)}</div>;
};

export default List1;
