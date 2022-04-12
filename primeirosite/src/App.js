import React from 'react';

const Equipe = (props) => {
  return(
    <div>
      <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/> 
      <Social fb={props.facebook}/>
      <hr></hr>
    </div>
  )
}

const Sobre = (props) => {
  return(
    <div>
      <h1>Ola sou {props.nome}</h1>
      <h2>Cargo: {props.cargo}</h2>
      <h3>Idade: {props.idade}</h3>
    </div>
  )
}

const Social =(props) => {
  return(
    <div>
      <a href={props.fb}>Facebook</a>
    </div>
  )
}

function App() {
  return (
    <div>
      <Equipe nome="Lucas" cargo="Programador" idade="23" facebook="https://www.facebook.com/lucasfilipe.ramos.10"/>
      <Equipe nome="Vinicius" cargo="analista de sistemas" idade="25" facebook="https://www.facebook.com/lucasfilipe.ramos.10"/>
    </div>
  );
}
export default App;
