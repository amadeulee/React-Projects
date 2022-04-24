import React from 'react';
import { Tarefa } from '../model';
import './styles.css';
import { TarefaUnica } from './TarefaUnica';

interface Props {
  listaTarefas: Tarefa[];
  setListaTarefas: React.Dispatch<React.SetStateAction<Tarefa[]>>;
}
export function ListaTarefas({ listaTarefas, setListaTarefas }: Props) {
  return (
    <div className="tarefas">
      {listaTarefas.map(listaTarefa => (
        <TarefaUnica
          tarefa={listaTarefa}
          key={listaTarefa.id}
          tarefas={listaTarefas}
          setListaTarefas={setListaTarefas}
        />
      ))}
    </div>
  );
}
