import questoes from "../bancodDeQuestoes";

export default function (req, res) {
  const id = +req.query.id;

  const questoesselecionada = questoes.filter((questoes) => questoes.id == id);

  if (questoesselecionada.length === 1) {
    const selecionada = questoesselecionada[0].embaralharRespostas();
    res.status(200).json({
      selecionada,
    });
  } else {
    res.status(204).send();
  }
}
