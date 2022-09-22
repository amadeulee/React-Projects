import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export function TransactionsTable() {
  useEffect(() => {
    api.get('/transaction').then(response => response.data);
  });

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de Software</td>
            <td className="deposit">R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Padaria</td>
            <td className="withdraw">- R$ 125</td>
            <td>Alimentos</td>
            <td>17/01/2021</td>
          </tr>
          <tr>
            <td>Club Sams</td>
            <td className="withdraw">- R$ 512</td>
            <td>Mercado</td>
            <td>26/07/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
