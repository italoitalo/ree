import React from 'react';
import styled from 'styled-components'

import GlobalStyles from './EstiloGlobal';

// import FormCadastro from "./components/formCadastro";
import PadraoPerfil from './components/PadraoPerfil';

export default function App() {

  return (
    <div>
        {/* <FormCadastro /> */}
        <PadraoPerfil/>
      <GlobalStyles />
    </div>
  );
}
