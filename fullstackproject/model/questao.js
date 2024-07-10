export default class QuestsModel {
    constructor(id, enunciado, respostas, acertou = false) {
      this._id = id;
      this._enunciado = enunciado;
      this._respostas = respostas;
      this._acertou = acertou;
    }
  
    get id() {
      return this._id;
    }
  
    get enunciado() {
      return this._enunciado;
    }
  
    get respostas() {
      return this._respostas;
    }
  
    get acertou() {
      return this._acertou;
    }
  
    get respondida() {
      for (let resposta of this._respostas) {
        if (resposta.revelada) return true;
      }
      return false;
    }
  }
  