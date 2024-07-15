import QuestsModel from "../../../model/questao";
import RespostaModel from "../../../model/resposta";

const questoes = [
  new QuestsModel(306, 'Qual bicho transmite a Doença de Chagas?', [
      RespostaModel.errada('Abelha'),
      RespostaModel.errada('Barata'),
      RespostaModel.errada('Pulga'),
      RespostaModel.certa('Barbeiro'),
  ]),
  new QuestsModel(202, 'Qual bicho?', [
      RespostaModel.errada('Abelha'),
      RespostaModel.errada('Barata'),
      RespostaModel.errada('Pulga'),
      RespostaModel.certa('Barbeiro'),
  ]),
]


export default questoes;
