import React, { useEffect, useState } from "react";
import LogicNumber from "@/components/LogicNumber";
import { parse } from "path";

type Props = {};

const desafio = (props: Props) => {

  const [number, setNumber] = useState<number>(6); 

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "column-reverse",
        height: '80vh'
      }}
    >

    
      <LogicNumber num={number} />

      <div>
        <label htmlFor="">
          Digite o numero sorteado
          <input type="number" value={number} onChange={(e) => setNumber(number < 6 ? 6 :  parseInt(e.target.value))} minLength={6}/>
        </label>
      </div>
    </div>
  );
};

export default desafio;
