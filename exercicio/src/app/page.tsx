import PrimeiroComponent from "@/components/PrimeiroComponent";
import Image from "next/image";
import tsx4component from "@/components/tsx4component";
import List1 from "@/components/list1";
import Fragment1 from "@/components/fragment1";


export default function Home() {

  const subtitle: string = 'subtitulo'

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

        <PrimeiroComponent/>
        <Fragment1 princial="funcinou" secundario="sim" descricao="a" />
      <h2>{subtitle}</h2>
        <List1/>
    </main>
  );
}
