import questoes from "../bancodDeQuestoes";

export default function (req, res) {
  res.status(202).json(questoes[0]);
}
