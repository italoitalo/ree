import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles from './EstiloGlobal';


import Rotas from './Rotas/Rotas';


import Rodape from './componentes/Rodape'

export default function App() {


  return (
          <Router>
       
        <Rotas/>
        <Rodape/> 

        <GlobalStyles />
      </Router>
    
  );
}
