import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      sexo: 'masculino'
    };

    this.trocaEmail = this.trocaEmail.bind(this);
    this.trocaSexo = this.trocaSexo.bind(this);
  }

  trocaEmail(event) {
    let valorDigitado = event.target.value;
    this.setState({email: valorDigitado});
  }


  trocaSexo(event) {
    let valorDigitado = event.target.value;
    this.setState({sexo: valorDigitado});
  }


  render() {

    return (
      <div>
        <h1>Login</h1>
        Email:
          <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.trocaEmail}
        />
        <br></br>

        Senha:
        <input type="password" name="senaha" value={this.state.senha}
            onChange={(event) => this.setState({senha: event.target.value})} />
         <br></br>

        Sexo:
        <select name="sexo" value={this.state.sexo} onChange={this.trocaSexo}>
          <option value="masculino">Masculino</option>
          <option value="feminino">feminino</option>
        </select>
      </div>
    );
  }
  
}

  export default App;