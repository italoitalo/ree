import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles from './EstiloGlobal';
import Routes from './Rotas/routes';
import Rodape from './componentes/Rodape'

export default function App() {


  return (
    <>
   
      <Router>
        <Routes/>

        <Rodape/> 
        <GlobalStyles />
      </Router>
 
    </>
  );
}
