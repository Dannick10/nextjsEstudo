import questoes from "../bancodDeQuestoes"

export default  (req, res) => {

    res.status(200).json(questoes.map(question => question.id))
}