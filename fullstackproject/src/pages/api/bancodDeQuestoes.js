import QuestsModel from "../../../model/questao";
import RespostaModel from "../../../model/resposta";

const questoes = [
  new QuestsModel(307, 'Qual é a capital da França?', [
    RespostaModel.errada('Londres'),
    RespostaModel.errada('Berlim'),
    RespostaModel.errada('Madri'),
    RespostaModel.certa('Paris'),
]),

new QuestsModel(308, 'Quem escreveu "Dom Casmurro"?', [
    RespostaModel.errada('Machado de Assis'),
    RespostaModel.errada('José de Alencar'),
    RespostaModel.errada('Jorge Amado'),
    RespostaModel.certa('Monteiro Lobato'),
]),

new QuestsModel(309, 'Qual é o maior planeta do Sistema Solar?', [
    RespostaModel.errada('Terra'),
    RespostaModel.errada('Vênus'),
    RespostaModel.errada('Marte'),
    RespostaModel.certa('Júpiter'),
]),

]


export default questoes;
