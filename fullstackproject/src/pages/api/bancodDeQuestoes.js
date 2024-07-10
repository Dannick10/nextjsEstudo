import questalModel from "../../../model/questao";
import RespostaModel from "../../../model/resposta";

const questoes = [
  new questalModel(306, "javascript é uma linguagem de orientaçao a objeto?", [
    RespostaModel.errada("Sim"),
    RespostaModel.certa("Não"),
  ]),
  new questalModel(202, `como se declara uma variavel de "nome" em js?`, [
    RespostaModel.errada("var = nome"),
    RespostaModel.errada("var nome = "),
    RespostaModel.certa("nome ="),
  ]),
  new questalModel(104, "como printa algo na tela com js?", [
    RespostaModel.errada("echo"),
    RespostaModel.errada("print"),
    RespostaModel.certa("console.log"),
  ]),
  new questalModel(354, "qual o mais usado em js?", [
    RespostaModel.errada(":"),
    RespostaModel.certa(";"),
  ]),
];

export default questoes;
