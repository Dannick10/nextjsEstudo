import PrimeiroComponent from "@/components/PrimeiroComponent";
import Image from "next/image";
import tsx4component from "@/components/tsx4component";
import List1 from "@/components/list1";
import Fragment1 from "@/components/fragment1";
import PropsLeitura from "@/components/PropsLeitura";
import Estilo from "@/components/Estilo";
import Render from "@/components/Render";
import RenderProduct from "@/components/RenderProduct";
import Renderizacao from "@/components/Renderizacao";
import Renderternario from "@/components/Renderternario";
import GroupList from "@/components/GroupList";
import Item from "@/components/Item";

export default function Home() {
  const subtitle: string = "subtitulo";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PrimeiroComponent />
      <Fragment1 princial="funcinou" secundario="sim" descricao="a" />
      <h2>{subtitle}</h2>
      <List1 />
      <PropsLeitura />
      <Estilo color={15} />
      <Estilo color={-5} />
      <Estilo color={5} />
      <Render />
      <RenderProduct />
      <Renderizacao numero={3}/>
      <Renderizacao numero={4}/>
      <Renderternario numero={5}/>
      <Renderternario numero={4}/>
   
    </main>
  );
}
