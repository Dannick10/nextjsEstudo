import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../components/template/Layout";
import useAppdata from "@/data/hook/useAppdata";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const dados = useAppdata()

  return (
    <Layout titulo="pagina Inicial" subtitulo="construido pagina admin" >
      <h3>{dados.nome}</h3>
    </Layout>
  );
}
