import React from 'react';
import styled from 'styled-components';
import Card from './Cards/Card'
import Card2 from './Cards/Card2'




export default function SecaoDeProdutosDoacoes() {
    return ( 
      <>
        <Container>
      
            <Produtos>
              <Grid>  
                <Card2  />
                <Card  />
                <Card  />
                <Card  />
                <Card  />
                <Card  />
                <Card  />
                <Card  />
                <Card2  />
                <Card  />
                <Card  />
                <Card  />
                <Card  />
                <Card  />
                <Card2  />
                <Card  />
                
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

