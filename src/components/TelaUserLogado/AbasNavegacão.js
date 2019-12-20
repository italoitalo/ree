import React from 'react';
import styled from 'styled-components';


export default function AbasNavegacao() {
  return (
    <>
      <Container>
        <DivDoacoes>
          <H1>Doações Públicas</H1>
        </DivDoacoes>
        <Traco />
        <DivDoacoes>
        <H1>Suas Doações</H1>
        </DivDoacoes>
      </Container>
    </>
  );
}

const Container=styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    width:100%;
    margin-top:0.3125rem;
  
`;
const DivDoacoes=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding: 1.8281rem 10.7813rem; 
 
 
  
`;
const Traco=styled.div`
    display:flex;
    border-radius:3.125rem;
    width: 0.1875rem;
    height: 3.25rem;
    background:#C4C4C4;
 
`;
const H1=styled.h1`
    font-family: Catamaran;
    font-style: normal;
    font-weight: bold;
    font-size: 2.1875rem;
    line-height: 3.5625rem;
    text-align: center;
`;




