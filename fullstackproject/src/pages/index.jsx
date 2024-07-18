import { Inter } from "next/font/google";
import QuestsModel from "../../model/questao";
import RespostaModel from "../../model/resposta";
import { useEffect, useState } from "react";
import Questionario from "@/components/Questionario";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const BASE_URL = "http://localhost:3000/api/";

  const [Ids, SetIds] = useState([]);
  const [questao, SetQuestao] = useState();
  const [RespostasCertas, SetRespostasCertas] = useState(0);

  const router = useRouter()

  const LoadingQuestionID = async () => {
    try {
      const resp = await fetch(`${BASE_URL}/questionario`);
      const data = await resp.json();
      SetIds(data);
    } catch (error) {
      console.error("Failed to load question IDs:", error);
    }
  };

  useEffect(() => {
    LoadingQuestionID();
  }, []);

  const LoadingQuestion = async (id) => {
    try {
      const resp = await fetch(`${BASE_URL}/questoes/${id}`);
      const data = await resp.json();
      SetQuestao(QuestsModel.criarUsandoObjeto(data.selecionada));
    } catch (error) {
      console.error("Failed to load question:", error);
    }
  };

  useEffect(() => {
    if (Ids.length > 0) {
      LoadingQuestion(Ids[0]);
    }
  }, [Ids]);

  const respostafornecida = (indice) => {
    SetQuestao(questao.respondercom(indice));
  };

  const questaoRespondida = (respondidas) => {
    SetQuestao(questao.respondercom(respondidas));
    const acertou = respondidas.acertou;
    SetRespostasCertas((prev) => prev + (acertou ? 1 : 0));
  };

  const tempoesgotado = () => {
    SetQuestao(questao.respondercom(-1));
  };

  const idProximaPergunta = () => {
    if (questao) {
      const proximoIndice = Ids.indexOf(questao.id) + 1;
      return Ids[proximoIndice];
    }
  };

  const irProproximopasso = () => {
    const proximoID = idProximaPergunta();
    proximoID ? irpraProximaQuestao(proximoID) : finalizar();
  };

  const irpraProximaQuestao = (proximoID) => {
    LoadingQuestion(proximoID);
  };

  const finalizar = () => {
    router.push({
      pathname: '/resultado',
      query: {
        total: Ids.length,
        certas: RespostasCertas
      }
    })
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className} bg-gray-100`}
    >
      <Questionario
        questao={questao}
        ultima={idProximaPergunta() === undefined}
        questaoRespondida={questaoRespondida}
        irProproximopasso={irProproximopasso}
        tempoesgotado={tempoesgotado}
      />
    </main>
  );
}
