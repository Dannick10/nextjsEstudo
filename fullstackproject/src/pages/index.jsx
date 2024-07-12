import Image from "next/image";
import { Inter } from "next/font/google";
import QuestsModel from "../../model/questao";
import QuestComponent from "@/components/QuestComponent";
import RespostaModel from "../../model/resposta";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const questaoMock = new QuestsModel(1, 'Melhor cor', [
  RespostaModel.errada('Verde'),
  RespostaModel.errada('roxo'),
  RespostaModel.errada('vermelho'),
  RespostaModel.certa('laranja')
])

export default function Home() {

  const [questao, SetQuestao] = useState(questaoMock)


  const respostafornecida  = (indice) => {
    SetQuestao(questao.respondercom(indice))
  }

  const tempoesgotado = ()  => {
    SetQuestao(questao.respondercom(-1))
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className} bg-gray-100`}
    >
    <QuestComponent props={questao} respostafornecida={respostafornecida}
    tempoesgotado={tempoesgotado}/>
    </main>
  );
}
