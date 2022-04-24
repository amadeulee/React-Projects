import React, { useEffect, useRef, useState } from 'react';
import { Tarefa } from '../model';
import { AiTwotoneEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import './styles.css';

interface Props {
  tarefa: Tarefa;
  tarefas: Tarefa[];
  setListaTarefas: React.Dispatch<React.SetStateAction<Tarefa[]>>;
}

export function TarefaUnica({ tarefa, tarefas, setListaTarefas }: Props) {
  const [edit, setEdit] = useState<boolean>(false);
  const [editarTarefa, setEditarTarefa] = useState<string>(tarefa.tarefa);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setListaTarefas(
      tarefas.map(tarefa =>
        tarefa.id === id ? { ...tarefa, tarefa: editarTarefa } : tarefa
      )
    );
    setEdit(false);
  };
  const handleDone = (id: number) => {
    setListaTarefas(
      tarefas.map(tarefa =>
        tarefa.id === id ? { ...tarefa, isDone: !tarefa.isDone } : tarefa
      )
    );
  };

  const handleDelete = (id: number) => {
    // const isNotId = function (tarefa: Tarefa) {
    //   if (tarefa.id !== id) return tarefa;
    // };
    setListaTarefas(tarefas.filter(tarefa => tarefa.id !== id));
  };

  const verifyEditValue = (e: React.FormEvent, id: number) => {
    if (!edit && !tarefa.isDone) {
      setEdit(!edit);
    } else if (edit) {
      handleEdit(e, tarefa.id);
    }
  };

  return (
    <form className="tarefas__unicas" onSubmit={e => handleEdit(e, tarefa.id)}>
      {edit ? (
        <input
          value={editarTarefa}
          onChange={e => {
            setEditarTarefa(e.target.value);
          }}
          className="tarefas__unicas--texto"
          ref={inputRef}
        />
      ) : tarefa.isDone ? (
        <s className="tarefas__unicas--texto">{tarefa.tarefa}</s>
      ) : (
        <span className="tarefas__unicas--texto">{tarefa.tarefa}</span>
      )}

      <div>
        <span className="icon" onClick={e => verifyEditValue(e, tarefa.id)}>
          <AiTwotoneEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(tarefa.id)}>
          <AiFillDelete />
        </span>
        {!edit && (
          <span className="icon" onClick={() => handleDone(tarefa.id)}>
            <MdDone />
          </span>
        )}
      </div>
    </form>
  );
}
