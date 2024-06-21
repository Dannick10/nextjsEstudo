import React, { useEffect, useState } from "react";
import { mega } from "../../functions/mega";
import Numero from "@/components/Numero";
import { render } from "react-dom";

type Props = {};

const index = (props: Props) => {
  const [numero, SetNumero] = useState<number[]>([0]);
  const [count, SetCount] = useState<number>(6);

  useEffect(() => {
    SetNumero(mega());
  }, []);

  const renderNumber = (): JSX.Element[] => {
    return numero.map((n) => <Numero key={n} numero={n} />);
  };

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2em",
        height: "100vh",
      }}
    >
      <div style={{ display: "flex", gap: "2em" }}>{renderNumber()}</div>

      <div>
        <input type="number" value={count} onChange={(e)=> SetCount(parseInt(e.target.value))} minLength={6}/>
        <button onClick={() => SetNumero(mega(count))}>Gerar aposta</button>
      </div>
    </section>
  );
};

export default index;
