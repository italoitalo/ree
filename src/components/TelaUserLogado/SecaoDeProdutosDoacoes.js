import React from 'react';
import styled from 'styled-components';
import Card from './Card'



export default function SecaoDeProdutosDoacoes() {
    return ( 
      <>
        <Container>
            <Produtos>
                <Card /> 
                          
            </Produtos>
        </Container>    
      </>
    );
}

const Container = styled.section`
display:flex;

justify-content:center;
padding-bottom:50px;

`;
const Produtos = styled.section`
display:flex;
flex-wrap:wrap;

justify-content: space-between;
max-width:1100px;




`;