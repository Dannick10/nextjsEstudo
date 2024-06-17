import PrimeiroComponent from "@/components/PrimeiroComponent";
import Image from "next/image";
import tsx4component from "@/components/tsx4component";

export default function Home() {

  const subtitle: string = 'subtitulo'

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

        <PrimeiroComponent/>
      <h2>{subtitle}</h2>
    </main>
  );
}
