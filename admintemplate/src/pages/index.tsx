import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../components/template/Layout";
import useAppdata from "@/data/hook/useAppdata";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const {alternarTema} = useAppdata()

  return (
    <Layout titulo="pagina Inicial" subtitulo="construido pagina admin" >
      <button onClick={alternarTema}>Click</button>
    </Layout>
  );
}
