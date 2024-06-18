export default class Produto {
    id: number
    nome: string
    preco: number

    constructor(id: number, nome: string, preco: number) {
        this.id = id 
        this.nome = nome 
        this.preco = preco
    }

    getid() {
        return this.id 
    }

    getnome() {
        return this.nome
    }

    getpreco() {
        return this.preco
    }
}