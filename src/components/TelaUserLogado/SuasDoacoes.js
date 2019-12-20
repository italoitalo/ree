// !    ARQUIVO criado para confeccionar a pagina de produtos disponiveis para os usuários logados

import styled from 'styled-components'

import React from 'react';
import Publicidade from './Publicidade';
import AbasNav from './AbasNavegacão';


export default function SuasDoacoes() {
    return ( 
      <>
      <Container>
          <AbasNav />
          <Publicidade />
          <h1>Suas Doações</h1>
        </Container>    
      </>
    );
}
const Container=styled.section`
    margin: 0 auto;
    max-width:1366px; 
    
`;

