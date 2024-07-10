import questalModel from "../../../model/questao";
import RespostaModel from "../../../model/resposta";

const questoes = [
  new questalModel(306, "qual bicho transmite a Doença de Chagas?", [
    RespostaModel.errada("caju"),
    RespostaModel.errada("côco"),
    RespostaModel.errada("chuchu"),
    RespostaModel.certa("abôbora"),
  ]),
  new questalModel(202, "qual fruto é conhecido no Norte e Nordeste como jerimum?", [
    RespostaModel.errada("caju"),
    RespostaModel.errada("côco"),
    RespostaModel.errada("chuchu"),
    RespostaModel.certa("abôbora"),
  ]),
];

export default questoes;
