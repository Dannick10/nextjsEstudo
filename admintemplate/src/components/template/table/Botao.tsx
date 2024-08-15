import React from "react";

type botaoProps = {
    cor?: 'bg-green-500' | 'bg-blue-500' | 'bg-red-500'
    className?: string 
    children: any 
    onclick?: () => void
};

const Botao = (props: botaoProps) => {

    const cor = props.cor ?? 'blue'

  return <button className={`bg-blue-500 ${cor} text-white px-4 py-2 rounded-md ${props.className}`} onClick={props.onclick}>{props.children}</button>;
};

export default Botao;
