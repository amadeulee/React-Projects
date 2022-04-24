import { useState } from 'react';
import { Container } from './components/Container';
import './components/styles.css';

function App() {
  return (
    <div className="main">
      <h1 className="title">BUSCADOR DE CEP</h1>
      <Container />
    </div>
  );
}

export default App;
