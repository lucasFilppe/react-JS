import React, {useState} from 'react';

function App() {

  //declaramos uma nova variavel de state ao qual chamamos de 'count'
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>Clique aqui</button>
    </div>
  );
}

export default App;
