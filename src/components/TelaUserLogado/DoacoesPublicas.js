// !    ARQUIVO criado para confeccionar a pagina de produtos disponiveis para os usuários logados

import styled from 'styled-components'

import React from 'react';
import Publicidade from './Publicidade';
import AbasNav from './AbasNavegacão';
import Card from './Card';
import Styled from 'styled-components';


export default function DoacoesPublicas() {
    return ( 
      <>
      <Container>
          <AbasNav />
          <Publicidade />
          <Card />
          <h1>Feed</h1>
        </Container>    
      </>
    );
}
const Container=styled.section`
  max-width:1100px;
`;

