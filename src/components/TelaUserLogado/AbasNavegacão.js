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
max-width:1366px; 
padding-bottom:30px;
padding-top:30px;
justify-content:space-around;
align-items:center;
background:#FFFFFF;
  
  

`;
const Traco=styled.div`
    width:3px;
    height:52.02px;
    border-radius:30px;
    background:#C4C4C4;
 
`;
const A=styled(Link)`
    font-family: Catamaran;
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    line-height: 57px;
    text-align: center;
    color: #999999;
    text-decoration:none;
`;




