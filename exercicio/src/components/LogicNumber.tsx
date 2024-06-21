import React, { useEffect, useState } from "react";

interface Props {
  num: number;
}

const LogicNumber = ({ num }: Props) => {
  const [list, setList] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const generateList = (): JSX.Element[] => {
      let list: JSX.Element[] = [];

      for (let i = 0; i <= num; i++) {
        list.push(<li key={i} style={{padding:'.5em', background:'rgb(20,10,50)', color:' white',borderRadius:'50%'}}>{Math.floor(Math.random() * 10)}</li>);
      }

      return list;
    };

    setList(generateList());
  }, []);

  return (
    <>
      <ul style={{ listStyle: "none", display: "flex", gap: "1em" }}>{list}</ul>
    </>
  );
};

export default LogicNumber;
