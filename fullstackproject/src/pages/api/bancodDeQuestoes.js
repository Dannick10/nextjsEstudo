import QuestsModel from "../../../model/questao";
import RespostaModel from "../../../model/resposta";

const questoes = [
    new QuestsModel(1, '1', [
        RespostaModel.errada('Verde'),
        RespostaModel.errada('roxo'),
        RespostaModel.errada('vermelho'),
        RespostaModel.certa('laranja')
      ]),
    new QuestsModel(2, '2', [
        RespostaModel.errada('Verde'),
        RespostaModel.errada('roxo'),
        RespostaModel.errada('vermelho'),
        RespostaModel.certa('laranja')
      ]),
    new QuestsModel(3, '3', [
        RespostaModel.errada('Verde'),
        RespostaModel.errada('roxo'),
        RespostaModel.errada('vermelho'),
        RespostaModel.certa('laranja')
      ]),
];

export default questoes;
