import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../components/template/Layout";
import useAppdata from "@/data/hook/useAppdata";
import LayoutTable from "@/components/template/table/LayoutTable";
import TableColumns from "@/components/template/table/TableColumns";
import Cliente from "@/model/cliente";
import Botao from "@/components/template/table/Botao";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const {alternarTema} = useAppdata()

  const clientes = [
    new Cliente('Daniel',24, '1'),
    new Cliente('Bia',45, '2'),
    new Cliente('Carlos',30, '3'),
    new Cliente('Pedro',54, '4'),
  ]

  const clienteSelecdionado = (cliente: Cliente) => {
console.log(cliente)
}
const clienteExcluido = (cliente: Cliente) => {
  console.log(cliente.nome)
  
  }

  return (
    <Layout titulo="pagina Inicial" subtitulo="construido pagina admin" >
      <LayoutTable titulo="Cadastro simples">
        <div className="flex justify-end">
        <Botao className="mb-4" cor="bg-green-500">Novo Cliente</Botao>
        </div>
        <TableColumns clientes={clientes} clienteSelecionado={clienteSelecdionado} clienteExcluido={clienteExcluido}></TableColumns>
      </LayoutTable>
    </Layout>
  );
}
