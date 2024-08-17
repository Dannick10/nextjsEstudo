import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../components/template/Layout";
import useAppdata from "@/data/hook/useAppdata";
import LayoutTable from "@/components/template/table/LayoutTable";
import TableColumns from "@/components/template/table/TableColumns";
import Botao from "@/components/template/table/Botao";
import FormularioTable from "@/components/template/table/FormularioTable";
import { useCliente } from "@/data/hook/useCliente";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { alternarTema } = useAppdata();

  const { clienteSelecdionado, salvarCliente, clienteExcluido, novoCliente, obterTodos, cliente, clientesdb, visivel} = useCliente()

  return (
    <Layout titulo="pagina Inicial" subtitulo="construido pagina admin">
      <LayoutTable titulo="Cadastro simples">
        {visivel === "tabela" ? (
          <>
            <div className="flex justify-end">
              <Botao
                className="mb-4"
                cor="bg-green-500"
                onclick={() => novoCliente()}
              >
                Novo Cliente
              </Botao>
            </div>
            <TableColumns
              clientes={clientesdb}
              clienteSelecionado={clienteSelecdionado}
              clienteExcluido={clienteExcluido}
            ></TableColumns>
          </>
        ) : (
          <FormularioTable
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => Setvisivel("tabela")}
          />
        )}
      </LayoutTable>
    </Layout>
  );
}
