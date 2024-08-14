import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../components/template/Layout";
import useAppdata from "@/data/hook/useAppdata";
import LayoutTable from "@/components/template/table/LayoutTable";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const {alternarTema} = useAppdata()

  return (
    <Layout titulo="pagina Inicial" subtitulo="construido pagina admin" >
      <LayoutTable titulo="Cadastro simples">
      <p>Conteudo</p>
      </LayoutTable>
    </Layout>
  );
}
