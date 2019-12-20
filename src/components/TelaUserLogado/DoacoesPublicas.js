// !    ARQUIVO criado para confeccionar a pagina de produtos disponiveis para os usuários logados

import styled from 'styled-components'

import React from 'react';
import Publicidade from './Publicidade';
import AbasNav from './AbasNavegacão';


export default function FeedProdutos() {
    return ( 
      <>
      <Container>
          <AbasNav />
          <Publicidade />
          <h1>Feed</h1>
        </Container>    
      </>
    );
}
const Container=styled.section`

`;

