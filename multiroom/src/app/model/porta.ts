export default class Porta {
  numero: number;
  presente: boolean;
  selecionada: boolean;
  aberta: boolean;

  constructor( numero,tempresente = false,selecionada = false,aberta = false) {
    this.numero = numero;
    this.presente = presente;
    this.selecionada = selecionada;
    this.aberta = aberta;
  }

  get numero() {
    return this.numero;
  };

  get presente() {
    return this.presente;
  };

  get selecionada() {
    return this.selecionada;
  };

  get aberta() {
    return this.aberta;
  };

  alternarSelecao() {
    const selecionada = !this.selecionada;
    return new Porta(this.numero, this.presente, this.selecionada, this.aberta);
  }

  desslecionar() {
    const selecionada = false;
    return new Porta(this.numero, this.presente, this.selecionada, this.aberta);
  }

  abrir() {
    const aberto = true;
    return new Porta(this.numero, this.presente, this.selecionada, this.aberta);
  }
}
