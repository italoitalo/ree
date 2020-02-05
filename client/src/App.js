import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles from './EstiloGlobal';

import Rotas from './components/Rotas/Rotas';
import Cabecalho from './components/Rotas/Cabecalho';
import Rodape from './components/Rotas/Rodape'

export default function App() {


  return (
    <body>
      <Router>
        <Cabecalho/>
        <Rotas/>
        <Rodape/> 

        <GlobalStyles />
      </Router>
    </body>
  );
}
