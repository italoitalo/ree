import React from 'react';
import styled from 'styled-components';
import Card from './Cards/Card'




export default function SecaoDeProdutosDoacoes() {
    return ( 
      <>
        <Container>
            <Produtos>
              <Grid>  
                <Card/>
                <Card/>
                <Card/>
              </Grid>
            </Produtos>
        </Container>    
      </>
    );
}

const Container = styled.section`
background:whitesmoke;
box-shadow: 0px 4px 80px rgba(0, 0, 0, 0.25);
border-radius:10px;
margin-top: -40px;
z-index:0;
flex-wrap:wrap;
justify-content:center;
padding-bottom:30px;
`;

const Produtos = styled.section`
flex-wrap:wrap;
padding-top:30px;
max-width:1230px;
height:100%;
`;


const Grid = styled.section`
  display: grid;
	grid-template-columns: repeat(2, 3fr);
`;

