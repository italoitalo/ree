// !    ARQUIVO criado para confeccionar a pagina de produtos disponiveis para os usuários logados



import React from 'react';
import Publicidade from './Publicidade';
import AbasNav from './AbasNavegacão';
import SecaoDeProdutosDoacoes from './SecaoDeProdutosDoacoes';
import Styled from 'styled-components';


export default function DoacoesPublicas() {
    return ( 
      <>
      <Container>
          <AbasNav />
           <Publicidade /> 
           <h1>suas doações</h1>
          <SecaoDeProdutosDoacoes /> 
        </Container>    
      </>
    );
}
const Container=Styled.section`
display:flex;
flex-wrap:wrap;
flex-direction:column;
 
`;
