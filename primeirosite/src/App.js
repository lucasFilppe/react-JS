import React, { Component } from 'react';

class Equipe extends Component{
  render(){
    return(
      
      //this referencia a este componente
      <div>
        <h1>{this.props.nome}</h1>
        <h2>{this.props.cargo}</h2>
        <h3>{this.props.idade}</h3>
      </div>
      
    );
  }
}

function App() {
  return (
    <div>
      <Equipe nome="Lucas" cargo="Programador" idade="25"/>
    </div>
  );
}
export default App;
