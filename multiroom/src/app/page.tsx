import Image from "next/image";
import Presente from "./components/Presente";
import Porta from "./components/Porta";

export default function Home() {
  return (
    <main className="flex items-center justify-center">
      <Porta selecionada={true}/>
      <Porta selecionada={false}/>
      
    </main>
  );
}
