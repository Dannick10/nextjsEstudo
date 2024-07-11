import Id from "@/pages/api/questoes/[id]";

export default class RespostaModel {
    constructor(valor, certa, revelada) {
      this._valor = valor;
      this._certa = certa;
      this._revelada = revelada;
    }
  
    static certa(valor) {
      return new RespostaModel(valor, true, false);
    }
  
    static errada(valor) {
      return new RespostaModel(valor, false, false);
    }

    revelar() {
      return new RespostaModel(this._valor,this._certa, true)
    }
  
    get valor() {
      return this._valor;
    }
  
    get certa() {
      return this._certa;
    }
  
    get revelada() {
      return this._revelada;
    }

  }
  