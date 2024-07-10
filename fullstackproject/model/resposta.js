export default class RespostaModel {
  constructor(valor, certa, revelada) {
    this.valor = valor;
    this.certa = certa;
    this.revelada = revelada;
  }

  get valor() {
    return this.valor;
  }

  get certa() {
    return this.certa;
  }

  get revelada() {
    return this.revelada;
  }
}
