import React from 'react';
import styled from 'styled-components';
import Card3 from './Cards/Card3'





export default function SecaoDeMeusProdutosMinhasDoacoes() {
    return ( 
      <>
        <Container>
            <Produtos>
              <Grid>  
                <Card3/>
                <Card3/>
                <Card3/>
                <Card3/>
                <Card3/>
                <Card3/>
                <Card3/>
                <Card3/>
                <Card3/>
                
              </Grid>
            </Produtos>
        </Container>    
      </>
    );
}

const Container = styled.section`
display:inline-flex;
flex-wrap:wrap;
justify-content:center;
padding-bottom:50px;

`;
const Produtos = styled.section`
display:inline-flex;
flex-wrap:wrap;
padding-top:50px;
justify-content:flex-start;
max-width:1230px;
height:100%;
`;


const Grid = styled.section`
    display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-auto-rows: auto;
  

`;

// const ColunaEsquerda = styled.section`
//   display:inline-flex;
//   flex-direction:column;
//   align-items: center;
//   flex-wrap:wrap;
// justify-content:center;
//   max-width:600px;
//   background:red;

// `;
// const ColunaDireita = styled.section`
//   display:inline-flex;
//   flex-direction:column;
//   align-items: center;
//   flex-wrap:wrap;
// justify-content:center;
//   max-width:600px;
//   background:blueviolet;
// `;