import React from 'react';
import GlobalStyles from './EstiloGlobal';
import FormCadastro from "./components/formCadastro";
//import NavPerfil from './components/NavPerfil';
// import Teste from './components/PadraoPerfil';


export default function App() {

  return (
    <div>
      <FormCadastro />
      {/* <NavPerfil/> */}
      
      <GlobalStyles />
    </div>
  );
}
