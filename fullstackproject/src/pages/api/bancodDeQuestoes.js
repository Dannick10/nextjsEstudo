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

new QuestsModel(310, 'Qual é a fórmula química da água?', [
    RespostaModel.errada('H2O2'),
    RespostaModel.errada('CO2'),
    RespostaModel.errada('NaCl'),
    RespostaModel.certa('H2O'),
]),

new QuestsModel(311, 'Quem pintou a Mona Lisa?', [
    RespostaModel.errada('Vincent van Gogh'),
    RespostaModel.errada('Pablo Picasso'),
    RespostaModel.errada('Claude Monet'),
    RespostaModel.certa('Leonardo da Vinci'),
]),

new QuestsModel(312, 'Qual é o principal gás que compõe a atmosfera da Terra?', [
    RespostaModel.errada('Oxigênio'),
    RespostaModel.errada('Dióxido de Carbono'),
    RespostaModel.errada('Hidrogênio'),
    RespostaModel.certa('Nitrogênio'),
]),

new QuestsModel(313, 'Em que ano ocorreu a queda do Muro de Berlim?', [
    RespostaModel.errada('1980'),
    RespostaModel.errada('1985'),
    RespostaModel.errada('1990'),
    RespostaModel.certa('1989'),
]),

new QuestsModel(314, 'Qual é o elemento químico representado pelo símbolo "Fe"?', [
    RespostaModel.errada('Fósforo'),
    RespostaModel.errada('Ferro'),
    RespostaModel.errada('Flúor'),
    RespostaModel.certa('Francium'),
]),

new QuestsModel(315, 'Qual é o nome do maior oceano da Terra?', [
    RespostaModel.errada('Atlântico'),
    RespostaModel.errada('Índico'),
    RespostaModel.errada('Ártico'),
    RespostaModel.certa('Pacífico'),
]),

new QuestsModel(316, 'Quem foi o primeiro presidente dos Estados Unidos?', [
    RespostaModel.errada('Thomas Jefferson'),
    RespostaModel.errada('John Adams'),
    RespostaModel.errada('Abraham Lincoln'),
    RespostaModel.certa('George Washington'),
]),
]


export default questoes;
