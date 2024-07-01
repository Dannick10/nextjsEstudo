
export default class PortaModel {
  numero: number;
  presente: boolean;
  selecionada: boolean;
  aberta: boolean;

  constructor( numero: number,presente = false,selecionada = false,aberta = false) {
    this.numero = numero;
    this.presente = presente;
    this.selecionada = selecionada;
    this.aberta = aberta;
  }

  get Numero() {
    return this.numero;
  };

  get Presente() {
    return this.presente;
  };

  get Selecionada() {
    return this.selecionada;
  };

  get Aberta() {
    return this.aberta;
  };

  alternarSelecao() {
    return new PortaModel(this.numero, this.presente, !this.selecionada, this.aberta);
  }

  desslecionar() {
    const selecionada = false;
    return new PortaModel(this.numero, this.presente, this.selecionada, this.aberta);
  }

  abrir() {
    const aberto = true;
    return new PortaModel(this.numero, this.presente, this.selecionada, this.aberta);
  }
}
