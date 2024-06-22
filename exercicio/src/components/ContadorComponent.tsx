import { Component } from "react";
import Numero from "./Numero";

export default class ContadorComponent extends Component {

  state = {
    numero: this.props.valorinicial ?? 0
  }


// construtor(props) {
  //  super(props)
//
    //this.inc = this.inc.bind(this)
  //}

  inc = () => {
    this.setState({
      numero: this.state.numero + 1
    })
  }

  dec = () => {
    this.setState({
      numero: this.state.numero - 1
    })
  }

  render() {
    return (
      <div>
        <h1>Contador</h1>
        <h2>{this.props.valorinicial}</h2>
        <h2>{this.state.numero}</h2>
        <button onClick={this.dec}>-</button>
        <button onClick={this.inc}>+</button>
      </div>
    );
  }
}
