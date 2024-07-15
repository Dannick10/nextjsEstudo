import Image from "next/image";
import { Inter } from "next/font/google";
import QuestsModel from "../../model/questao";
import QuestComponent from "@/components/QuestComponent";
import RespostaModel from "../../model/resposta";
import { useEffect, useState } from "react";
import Questionario from "@/components/Questionario";

const inter = Inter({ subsets: ["latin"] });

const questaoMock = new QuestsModel(1, "Melhor cor", [
  RespostaModel.errada("Verde"),
  RespostaModel.errada("roxo"),
  RespostaModel.errada("vermelho"),
  RespostaModel.certa("laranja"),
]);

export default function Home() {
  const BASE_URL = "http://localhost:3000/api/questionario";

  const [Ids, SetIds] = useState([]);

  useEffect(() => {
    const LoadingQuestionID = async () => {
      try {
        const resp = await fetch(BASE_URL);
        const data = await resp.json();
        SetIds(data);
      } catch (error) {
        console.error("Failed to load question IDs:", error);
      }
    };

    LoadingQuestionID();
  }, [BASE_URL]);

  console.log(Ids)

  const [questao, SetQuestao] = useState(questaoMock);

  const respostafornecida = (indice) => {
    SetQuestao(questao.respondercom(indice));
  };

  const tempoesgotado = () => {
    SetQuestao(questao.respondercom(-1));
  };

  const irProproximopasso = () => {};

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className} bg-gray-100`}
    >
      <Questionario
        questao={questao}
        ultima={true}
        questaoRespondida={respostafornecida}
        irProproximopasso={irProproximopasso}
      />
    </main>
  );
}
