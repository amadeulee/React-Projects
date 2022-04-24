import React, { useRef } from 'react';
import './styles.css';

interface Props {
  tarefa: string;
  setTarefa: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

export function InputField({ tarefa, setTarefa, handleAdd }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={e => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        className="input__box"
        type="input"
        value={tarefa}
        onChange={e => setTarefa(e.target.value)}
        placeholder="Insira uma tarefa"
      ></input>
      <button className="input_submit" type="submit">
        Enter
      </button>
    </form>
  );
}
