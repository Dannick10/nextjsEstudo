'use client'

import { list } from "postcss";
import React, {useState} from "react";
import { render } from "react-dom";


const Render = () => {
  const listaAluno = [
    "Maria",
    "carlos",
    "Laura",
    "Elaine",
    "Bruno",
    "Fabricio",
    "luis",
    "Flavio",
    "Fabiana",
    "Leticia",
  ];

  const renderList = () => {
    return listaAluno.map((e,i ) => (<li key={i}>{e}</li>))
  }


  return <>

  
    {renderList()}
  </>;
};

export default Render;
