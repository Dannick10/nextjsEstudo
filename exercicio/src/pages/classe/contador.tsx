import ContadorComponent from "@/components/ContadorComponent";
import { Component } from "react";


export default class Contador extends Component {

  render() {
    return (
      <div>
        <h1>Teste classe</h1>
          <ContadorComponent valorinicial={100} passo={1}/>
      </div>
    );
  }
}
