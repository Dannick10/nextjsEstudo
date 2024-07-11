import questionario from "@/pages/api/questionario";
import { embaralhar } from "../functions/arrays";
import RespostaModel from "./resposta";

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

    respondercom(indice) {
      const acertou = this.respostas[indice]?._acertou
      const resposta = this.respostas.map((resposta, i) => {
        const respostasSelecionada = indice === i 
        const deveRevelar = respostasSelecionada || resposta.certa
        return deveRevelar ? resposta.revelar() : resposta
      })
      return new QuestsModel(this.id, this.enunciado, resposta, acertou)
    }

    embaralharRespostas() {
      let respostasEmbaralhadas = embaralhar(this.respostas)
      return new QuestsModel(this.id, this.enunciado, respostasEmbaralhadas, this.acertou)
    }
  
    get respondida() {
      for (let resposta of this._respostas) {
        if (resposta.revelada) return true;
      }
      return false;
    }
  }
  