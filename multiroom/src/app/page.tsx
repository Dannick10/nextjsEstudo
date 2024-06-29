import Image from "next/image";
import Presente from "./components/Presente";
import Porta from "./components/Porta";
import PortaModel from "./model/porta";

export default function Home() {

  const p1 = new PortaModel(1, false, true)

  return (

    <main className="flex items-center justify-center">
      <Porta porta={p1}/>
      
    </main>
  );
}
