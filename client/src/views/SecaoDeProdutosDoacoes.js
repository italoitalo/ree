import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardItem from './../componentes/Cards/Card'
import api from '../../src/services/api'

export default function SecaoDeProdutosDoacoes() {
  const [card, setCard] = useState([])

    useEffect(() => {
         async function loadCards() {
          try {
            const response = await api.post('/card');
            console.log(response);
           return setCard(response.data)
          } catch (error) {
            console.error(error);
          }
        }

        loadCards()
    }, [])
    return ( 
      <>
        <Container >
          <Produtos >
            <Grid >


          {/* const numbers = [1, 2, 3, 4, 5];
          const listItems = numbers.map((number) =>
          <li key={number.toString()}>
          {number}
          </li> */}

              
              {card.map(card => ( 
                  <CardItem key = {card.id_card} card={card }/>
              ))}  
            </Grid> 
          </Produtos> 
        </Container>     

      </>
    );
}

const Container = styled.section `
background:whitesmoke;
box-shadow: 0px 4px 80px rgba(0, 0, 0, 0.25);
border-radius:10px;
margin-top: -40px;
z-index:0;
flex-wrap:wrap;
justify-content:center;
padding: 30px;

@media(max-width:765px){ 
  padding:10px 0;
}
`;

const Produtos = styled.section `
flex-wrap:wrap;
padding-top:10px;

max-width:1200px;
height:100%;
`;


const Grid = styled.section `
  display: grid;
  grid-template-columns: repeat(2, 12fr);
  @media (max-width:765px){
  display:flex;
  flex-direction: column;
}
`;