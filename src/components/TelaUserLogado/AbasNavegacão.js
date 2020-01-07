import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";


export default function AbasNavegacao() {
  return (
    <>
      
          <Container>
            <A to='/'>Doações Públicas</A>
            <Traco />
            <A to='/home/suasdoacoes'>Suas Doações</A>
          </Container>
      
    </>
  );
}


const Container=styled.section`
display:flex;
flex-wrap:wrap;
flex:0 0 auto;
max-width:85.375rem; 
min-height:100px;
justify-content:space-evenly;
align-items:center;

`;
const Traco=styled.div`
    
    width:3px;
    height:52.02px;
    border-radius:30px;
    background:#C4C4C4;
 
`;
const A=styled(Link)`
    padding:10px;

    font-family: Catamaran;
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    line-height: 57px;
    text-align: center;
    color: #999999;
    text-decoration:none;
`;




