import Image from "next/image";
import { Inter } from "next/font/google";
import QuestsModel from "../../model/questao";
import QuestComponent from "@/components/QuestComponent";
import RespostaModel from "../../model/resposta";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {

  const questaoTest = new QuestsModel(1, 'Melhor cor', [
    RespostaModel.errada('Verde'),
    RespostaModel.certa('azul')
  ])


  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
    <QuestComponent props={questaoTest}/>
    </main>
  );
}
