import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "./components/template/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout titulo="pagina Inicial" subtitulo="construido pagina admin" >
        <h2>Conteudo</h2>
    </Layout>
  );
}
