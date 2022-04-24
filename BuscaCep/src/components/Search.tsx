import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import api from '../services/api';
import './styles.css';

type searchProps = {
  searchData(e: React.FormEvent, cep: string): Promise<void>;
};

export function Search({ searchData }: searchProps) {
  const [input, setInput] = useState<string>('');

  return (
    <form
      className="search-form"
      onSubmit={e => {
        searchData(e, input);
        setInput('');
      }}
    >
      <input
        className="search-input"
        type="text"
        placeholder="Insira seu CEP"
        value={input}
        onChange={e => setInput(e.target.value)}
      ></input>
      <FiSearch
        className="search-icon"
        onClick={e => {
          searchData(e, input);
          setInput('');
        }}
      />
    </form>
  );
}
