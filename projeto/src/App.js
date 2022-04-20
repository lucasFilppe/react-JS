import React, {useState} from 'react';

function App() {

  //
  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar React hooks'
  ]);

  const [input, setInput] = useState('');

  function handleAdd() {
    setTarefas([...tarefas, input])
    setInput('')
  }

  return (
    <div>
      <h1>Hooks</h1>
      <ul>
        {tarefas.map(tarefa =>(
          <li>{tarefa}</li>
        ))}
      </ul>

      {/*botao para adicionar nova tarefa*/}
      <input type='text' value={input} onChange={e => setInput(e.target.value)}/>
      <button type='button' onClick={handleAdd}>Adicionar</button>

    </div>
  );
}

export default App;
