import Cliente from "@/model/cliente";
import clienteRepositorio from "@/model/clienteRepositorio";
import { db } from "../../firebase/config"; 

import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  setDoc,
  deleteDoc,
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "firebase/firestore";

export default class ColecaoCliente implements clienteRepositorio {
  conversor: FirestoreDataConverter<Cliente> = {
    toFirestore(cliente: Cliente): DocumentData {
      return {
        nome: cliente.nome,
        idade: cliente.idade,
      };
    },
    fromFirestore(
      snapshot: QueryDocumentSnapshot,
      options: SnapshotOptions
    ): Cliente {
      const dados = snapshot.data(options);
      return new Cliente(dados.nome, dados.idade, snapshot.id);
    },
  };

  async salvar(cliente: Cliente): Promise<Cliente> {
    if (cliente?.id) {
      await setDoc(doc(this.colecao(), cliente.id), this.conversor.toFirestore(cliente));
      return cliente;
    } else {
      const docRef = await addDoc(this.colecao(), this.conversor.toFirestore(cliente));
      const docSnap = await getDoc(docRef)
      return this.conversor.fromFirestore(docSnap, {});
    }
  }

  async excluir(cliente: Cliente): Promise<void> {
    await deleteDoc(doc(this.colecao(), cliente.id));
  }

  async obterTodos(): Promise<Cliente[]> {
    const query = await getDocs(this.colecao());
    return query.docs.map((doc) => this.conversor.fromFirestore(doc, {}));
  }

  colecao() {
    return collection(db, "cliente").withConverter(this.conversor);
  }
}
