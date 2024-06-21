import React, { useEffect, useState } from "react";
import LogicNumber from "@/components/LogicNumber";
import { parse } from "path";

type Props = {};

const desafio = (props: Props) => {

  const [number, setNumber] = useState<number>(6); 
  const [reload, SetReload] = useState<boolean>(false); 

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

        {reload && <>
      <LogicNumber num={number} />
        <button onClick={() => SetReload(false)}>Repetir</button>
        </>
        }

      <div>
        <label htmlFor="">
          Digite o numero sorteado
          <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} minLength={6}/>
        </label>
        <button onClick={() => SetReload(true)}>Sortear</button>
      </div>
    </div>
  );
};

export default desafio;
