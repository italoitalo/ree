import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './EstiloGlobal';
import Rotas from './components/Rotas/Rotas'
import Cabecalho from './components/Rotas/Cabecalho';
import { BrowserRouter } from 'react-router-dom';

import FormCadastro from "./components/formCadastro";
//import NavPerfil from './components/NavPerfil';
// import Teste from './components/PadraoPerfil';

// import FormCadastro from "./components/formCadastro";
// import PadraoPerfil from './components/PadraoPerfil';

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Cabecalho/>
        <Rotas/>
        
        {/* <FormCadastro /> */}
        {/* <PadraoPerfil/> */}
        <GlobalStyles />
      </BrowserRouter>
    </>
  );
}
