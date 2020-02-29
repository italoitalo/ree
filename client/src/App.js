import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles from './EstiloGlobal';
import Routes from './Rotas/routes';
import Rodape from './componentes/Rodape'

import Publico from './Rotas/publico'


export default function App() {


  return (
    <body>
      <Router>
        <Routes></Routes>

        <Rodape/> 
        <GlobalStyles />
      </Router>
    </body>
  );
}
