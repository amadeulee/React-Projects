import React, { useState } from 'react';

import { InputField } from './components/InputField';
import { ListaTarefas } from './components/ListaTarefas';
import { Tarefa } from './model';

function App() {
  const [tarefa, setTarefa] = useState<string>('');
  const [listaTarefas, setListaTarefas] = useState<Tarefa[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (tarefa) {
      setListaTarefas([
        ...listaTarefas,
        { id: Date.now(), tarefa, isDone: false },
      ]);
      setTarefa('');
    }
  };
  // console.log(tarefa);
  console.log(listaTarefas);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundImage: 'linear-gradient(to right bottom, #2f74c0, purple)',
        fontFamily: 'Neucha, cursive',
      }}
    >
      <span
        style={{
          textTransform: 'uppercase',
          fontSize: '40px',
          margin: '30px 0',
          color: 'white',
          zIndex: '1',
          textAlign: 'center',
        }}
      >
        Tarefas
      </span>
      <InputField tarefa={tarefa} setTarefa={setTarefa} handleAdd={handleAdd} />
      <ListaTarefas
        listaTarefas={listaTarefas}
        setListaTarefas={setListaTarefas}
      />
    </div>
  );
}

export default App;
