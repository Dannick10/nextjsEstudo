import ColecaoCliente from "@/backend/db/ColecaoCliente";
import clienteRepositorio from "@/model/clienteRepositorio";
import { useEffect, useState } from "react";
import Cliente from "@/model/cliente";

export function useCliente() {

    
  const repo: clienteRepositorioepositorio = new ColecaoCliente()

  const [cliente, Setcliente] = useState<Cliente>(Cliente.vazio())
  const [clientesdb, SetClientesdb] = useState<Cliente[]>([])
  const [visivel, Setvisivel] = useState<"tabela" | "form">("tabela");
  
  useEffect(() => {obterTodos() },[])
  
  const obterTodos = () => {
    repo.obterTodos().then(cli => {
      SetClientesdb(cli)
    })
  }

  const clienteSelecdionado = (cliente: Cliente) => {
    Setcliente(cliente)
    Setvisivel('form')
  };

  const novoCliente = () => {
    Setcliente(Cliente.vazio())
    Setvisivel('form')
  }

  const clienteExcluido = (cliente: Cliente) => {
        repo.excluir(cliente)
    Setvisivel('tabela')
      obterTodos()
  };

  const salvarCliente = (cliente: Cliente) => {
      repo.salvar(cliente)
      Setvisivel('tabela')
      obterTodos()
  };

  return {
    salvarCliente,
    novoCliente,
    clienteExcluido,
    clienteSelecdionado,
    obterTodos,
    cliente,
    clientesdb,
     visivel
  }

}