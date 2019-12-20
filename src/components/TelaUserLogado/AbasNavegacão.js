import React from 'react';
import styled from 'styled-components';


export default function AbasNavegacao() {
  return (
    <>
      <ContainerBG>
          <Container>
            <DivDoacoes>
              <H1>Doações Públicas</H1>
            </DivDoacoes>
            <Traco />
            <DivDoacoes>
              <H1>Suas Doações</H1>
            </DivDoacoes>
          </Container>
      </ContainerBG>
    </>
  );
}

const ContainerBG=styled.div`
   display:flex;
width:1366px;
   justify-content:center;

`;
const Container=styled.div`
   display:flex;
   width:100%;
   justify-content:center;
   background:khaki;

`;
const DivDoacoes=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    background:red;
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




