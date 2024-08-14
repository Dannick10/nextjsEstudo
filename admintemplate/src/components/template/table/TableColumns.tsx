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
            <th className="p-4">Codigo</th>
            <th className="p-4">nome</th>
            <th className="p-4">idade</th>
      </tr>
        )
    }


    const renderizarCorpo = () => {
      return props.clientes?.map((cliente,i) => {
        return (
            <tr key={cliente.id} className={`${i%2 ? 'bg-purple-300' : 'bg-purple-100'}`}> 
                <td className="p-4">{cliente.id}</td>
                <td className="p-4">{cliente.nome}</td>
                <td className="p-4">{cliente.idade}</td>
            </tr>
        )
      })

    }


  return (
    <table className="w-full text-left">
        <thead className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-lg">
      {renderizarCabecalho()}
        </thead>
        <tbody>
            {renderizarCorpo()}
        </tbody>
    </table>
  );
};

export default TableColumns;
