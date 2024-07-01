import PortaModel from "../model/porta";

export const CriarPortas = (qtde: number, selecionada: number) => {
    return Array.from({length: qtde}, (_,i) => {
        const numero = i + 1
        const tempresente = numero === selecionada
        return new PortaModel(numero, tempresente)
    })

}

