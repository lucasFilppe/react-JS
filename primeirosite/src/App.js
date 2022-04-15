import React, { Component } from 'react';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome: "Lucas",
      contador: 0
    };
    this.aumetar = this.aumetar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }

  aumetar(){
    let state = this.state;
    state.contador += 1;
    this.setState(state);
  }

  diminuir(){
    let state = this.state;
    state.contador -= 1;
    this.setState(state)
  }
    render(){
    return(
      
      <div>
        <h1>Contatdor</h1>
        <h3>
          <button onClick={this.diminuir}>-</button>
            {this.state.contador}
          <button onClick={this.aumetar}>+</button>
        </h3>
      </div>
      
    );
  }
}


export default App;
