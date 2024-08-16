import Cliente from "@/model/cliente";
import clienteRepositorio from "@/model/clienteRepositorio";
import firebase from "../../firebase/config";


export default class ColecaoCliente implements clienteRepositorio {

    conversor = {
        toFIrestore(cliente: Cliente) {
            return {
                nome: cliente.nome,
                idade: cliente.idade,
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.snapshotOptions): Cliente {
            const dados = snapshot.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot.id)
        }
    }


  async salvar(cliente: Cliente): Promise<Cliente> {

    if(cliente?.id){
       await this.colecao().doc(cliente.id).set(cliente)
       return cliente
     } else {
        const docRef = await this.colecao().add(cliente)
        const doc = await docRef.get()
        return doc.data()
    }
  }

  async excluir(cliente: Cliente): Promise<void> {
    return this.colecao().doc(cliente.id).delete()
  }

  async obterTodos(): Promise<Cliente[]> {
    const query = await this.colecao().get()
    return query.doc.map(doc => doc.data())
  }

  async colecao() {
    return firebase 
    .firestore().collection('cliente').withConverter(this.#conversor)
  }
}
