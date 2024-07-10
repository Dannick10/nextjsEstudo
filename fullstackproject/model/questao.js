export default class questalModel {
  constructor(id, enunciado, respostas, acertou = false) {
    this.id = id;
    this.enunciado = enunciado;
    this.respostas = respostas;
    this.acertou = acertou;
  }

  get id() {
    return this.id;
  }

  get enunciado() {
    return this.enunciado;
  }

  get respostas() {
    return this.respostas;
  }

  get acertou() {
    return this.acertou;
  }

  get respondida() {
    for(let respostas of this.respostas) {
        if(respostas.revelada) return true
    }

    return false;
  }
}
