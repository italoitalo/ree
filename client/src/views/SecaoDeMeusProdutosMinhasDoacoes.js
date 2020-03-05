import React from 'react';
import styled from 'styled-components';
import Card from '../componentes/Cards/Card3'





export default function SecaoDeMeusProdutosMinhasDoacoes() {
    return ( <>
        <Container >
            <Produtos >
                <Grid >
                    <Card/>
                </Grid> 
            </Produtos> 
        </Container>     
        </>
    );
}

const Container = styled.section `
background:whitesmoke;
max-width:1050px;
box-shadow: 0px 4px 80px rgba(0, 0, 0, 0.25);
border-radius:10px;
margin-top: -40px;
z-index:0;
flex-wrap:wrap;
justify-content:center;
padding-bottom:30px;
`;
const Produtos = styled.section `
display:inline-flex;
flex-wrap:wrap;
padding-top:50px;
justify-content:flex-start;
max-width:1230px;
height:100%;
`;


const Grid = styled.section `
    display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-auto-rows: auto;
  

`;