import { Component } from "react";
import Numero from "./Numero";

interface stateComponent {
  valorinicial?: number
  passo?: number
}

export default class ContadorComponent extends Component<stateComponent> {


  state = {
    numero: this.props.valorinicial ?? 0,
    passo: this.props.passo ?? 1
  }

  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo 
    })
  }

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo 
    })
  }

  renderForm() {
    return (
      <>
      <label > name
        <input type="text"  />
      </label>
      <label > idade
        <input type="text"  />
      </label>
      </>
    )
  }

  render() {
    return (
      <div>
        <h1>Contador</h1>
        <h2>{this.props.valorinicial}</h2>
        <h2>{this.state.numero}</h2>
        <input type="number" value={this.state.passo} onChange={e => this.setState({passo: +e.target.value})} />
        <button onClick={this.dec}>-</button>
        <button onClick={this.inc}>+</button>
        {this.renderForm()}
      </div>
    );
  }
}
