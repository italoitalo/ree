// !    ARQUIVO criado para confeccionar a pagina de produtos disponiveis para os usuários logados



import React from 'react';
import AbasNav from '../componentes/AbasNavegacão';
import SecaoDeMeusProdutosMinhasDoacoes from './SecaoDeMeusProdutosMinhasDoacoes';
import Styled from 'styled-components';

import HeaderPrivt from './../componentes/CabecalhoPrivado'


export default function DoacoesPublicas() {
    return ( 
      <>
  <HeaderPrivt/>
      <Container>
          <AbasNav />
          <SecaoDeMeusProdutosMinhasDoacoes /> 
        </Container>    
      </>
    );
}
const Container=Styled.section`
  display:flex;
  flex-wrap:wrap;
  flex-direction:column;
  align-content: space-around;

`;
