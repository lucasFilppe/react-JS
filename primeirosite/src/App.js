import React from 'react';

//criando componente e propriedades
const BemVindo = (props) => {
  return(
    <div>
      <h2>Bem vindo(a) {props.nome} </h2>
      <h2>Tenho (a) {props.idade} anos </h2>
    </div>
  );
}

function App() {
  return (
    <div >
      <h1>Ola mundo</h1>
        <BemVindo nome='Lucas' idade="23"/>
        <BemVindo nome='Daniel' idade="27"/>
    </div>
  );
}

export default App;
