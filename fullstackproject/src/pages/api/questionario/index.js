import { embaralhar } from "../../../../functions/arrays"
import questoes from "../bancodDeQuestoes"

export default  (req, res) => {
    const ids = questoes.map(questoes => questoes.id)

    res.status(200).json(embaralhar(ids))
}