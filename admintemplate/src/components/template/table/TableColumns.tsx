"use client";

import { IconeEditar, IconeExcluir } from "@/components/icons";
import Cliente from "@/model/cliente";
import React from "react";

type TableColumnsProps = {
  clientes: Cliente[];
  clienteSelecionado?: (cliente: Cliente) => void;
  clienteExcluido?: (cliente: Cliente) => void;
};

const TableColumns = (props: TableColumnsProps) => {

    const exebirAcoes = props.clienteExcluido || props.clienteSelecionado


  const renderizarCabecalho = () => {
    return (
      <tr>
        <th className="p-4">Codigo</th>
        <th className="p-4">nome</th>
        <th className="p-4">idade</th>
        {exebirAcoes ? 
        <th className="p-4 text-center">Ações</th>
    :false}
      </tr>
    );
  };

  const renderizarCorpo = () => {
    return props.clientes?.map((cliente, i) => {
      return (
        <tr
          key={cliente.id}
          className={`${i % 2 ? "bg-purple-300" : "bg-purple-100"}`}
        >
          <td className="p-4">{cliente.id}</td>
          <td className="p-4">{cliente.nome}</td>
          <td className="p-4">{cliente.idade}</td>
          {renderizarAcoes(cliente)}
        </tr>
      );
    });
  };

  const renderizarAcoes = (client: Cliente) => {
    return (
      <td className="flex justify-center items-center">
        {props.clienteSelecionado ? (
          <button className="p-2 text-blue-400 hover:bg-purple-400 rounded-full hover:text-white"
          onClick={() => props.clienteSelecionado?.(client)}>
          {IconeEditar}
          </button>
        ) : (
            false
        )}
        {props.clienteExcluido ? (
            <button className="p-2 text-red-400 hover:bg-purple-400 rounded-full hover:text-white"
            onClick={() => props.clienteExcluido?.(client)} >
            {IconeExcluir}
          </button>
        ) : (
          false
        )}
      </td>
    );
  };

  return (
    <table className="w-full text-left">
      <thead className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-lg">
        {renderizarCabecalho()}
      </thead>
      <tbody>{renderizarCorpo()}</tbody>
    </table>
  );
};

export default TableColumns;
