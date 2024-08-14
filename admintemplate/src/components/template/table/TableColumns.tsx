'use client'

import Cliente from "@/model/cliente";
import React from "react";

type TableColumnsProps = {
  clientes: Cliente[];
};

const TableColumns = (props: TableColumnsProps) => {


    const renderizarCabecalho = () => {
        return (
            <tr>
            <th>Codigo</th>
            <th>nome</th>
            <th>idade</th>
      </tr>
        )
    }


    const renderizarCorpo = () => {
      return props.clientes?.map((cliente,i) => {
        return (
            <tr key={cliente.id}> 
                <td>{cliente.id}</td>
                <td>{cliente.nome}</td>
                <td>{cliente.idade}</td>
            </tr>
        )
      })

    }


  return (
    <table>
        <thead>
      {renderizarCabecalho()}
        </thead>
        <tbody>
            {renderizarCorpo()}
        </tbody>
    </table>
  );
};

export default TableColumns;
