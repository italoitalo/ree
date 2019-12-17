import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyles from './EstiloGlobal';

import Rotas from './components/Rotas/Rotas';
import Cabecalho from './components/Rotas/Cabecalho';

export default function App() {

  return (
    <>
      <Router>
        <Cabecalho/>
        <Rotas/>
        Footer 
        <GlobalStyles />
      </Router>
    </>
  );
}
