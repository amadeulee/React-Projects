import { useState } from 'react';
import { Data } from '../model';
import api from '../services/api';
import { Search } from './Search';
import './styles.css';

export function Container() {
  const [data, setData] = useState<Data>({
    cep: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: '',
  });
  const [qntDados, setQntDados] = useState<number>(0);
  const [inputExist, setInputExist] = useState<boolean>(true);

  async function searchData(e: React.FormEvent, cep: string) {
    e.preventDefault();

    if (cep === '') {
      setInputExist(false);
    } else {
      try {
        const response = await api.get(`${cep}/json`);
        console.log(`${cep} aqui`);
        console.log(Object.entries(response.data));
        setData({ ...response.data });
        setQntDados(Object.keys(data).length);
        console.log(Object.entries(data));
        setInputExist(true);
      } catch {
        console.log('erro');
        setQntDados(1);
      }
    }
  }
  return (
    <div className="container">
      <Search searchData={searchData} />
      {inputExist ? (
        qntDados > 1 && Object.keys(data).length > 1 ? (
          <div className="informations">
            <span className="itens itens-cep">CEP : {data.cep}</span>
            <li className="itens">Logradouro: {data.logradouro}</li>
            {data.complemento && (
              <li className="itens">Complemento: {data.complemento}</li>
            )}

            <li className="itens">Setor/Bairro: {data.bairro}</li>
            <li className="itens">
              Cidade/Estado:
              {data.localidade} - {data.uf}
            </li>
          </div>
        ) : (
          qntDados === 1 && (
            <span style={{ marginTop: '20px', color: 'white' }}>
              CEP nao encontrado
            </span>
          )
        )
      ) : (
        <span style={{ display: 'flex', margin: '20px', color: 'red' }}>
          Insira algum CEP
        </span>
      )}
    </div>
  );
}
