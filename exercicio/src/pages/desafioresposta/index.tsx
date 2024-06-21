import React, { useEffect, useState } from "react";
import { mega } from "../../functions/mega";
import Numero from "@/components/Numero";

type Props = {};

const index = (props: Props) => {
  const [numero, SetNumero] = useState<number[]>([0]);

  useEffect(() => {
    SetNumero(mega())
}, [])

  const renderNumber = (): JSX.Element[] => {
    return numero.map((n) => <Numero key={n} numero={n} />);
  };


  return <section>
    <div style={{display: 'flex', gap: '2em'}}>{renderNumber()}</div>

  </section> 
};

export default index;
