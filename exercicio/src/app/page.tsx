import PrimeiroComponent from "@/components/PrimeiroComponent";
import Image from "next/image";
import tsx2component from "@/components/tsx2component";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

        <PrimeiroComponent/>
    </main>
  );
}
