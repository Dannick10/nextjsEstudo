import { table } from "console";
import React from "react";

const Tabuleiro = () => {
  const generateTable = (num: number): JSX.Element[] => {
    const Table: JSX.Element[] = [];
    for (let i = 0; i <= num; i++) {
      Table.push(
        <>
          <div
            className={`w-[5em] h-[5em] ${
              i % 2 ? "bg-white text-black" : "bg-black text-white"
            } flex items-center justify-center`}
          >
            {i}
          </div>
        </>
      );
    }

    return Table;
  };

  return <div className="flex flex-wrap w-[50%]">{generateTable(300)}</div>;
};

export default Tabuleiro;
