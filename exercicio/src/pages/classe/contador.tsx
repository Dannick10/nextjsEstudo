import ContadorComponent from "@/components/ContadorComponent";
import { Component } from "react";


export default class Contador extends Component {

  render(): JSX.Element {
    return (
      <div>
        <h1>Teste classe</h1>

        <ContadorComponent/>
      </div>
    );
  }
}
