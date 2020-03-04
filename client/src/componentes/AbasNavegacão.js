import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

import Busca from './BarraDeBusca';

export default function AbasNavegacao() {
  return (
    <>
      <Busca/>
          <Container>
            <A to='/private'>Doações Públicas</A>
            <Traco />
            <A to='/home/suasdoacoes'>Suas Doações</A>
            
          </Container>

          
      
    </>
  );
}


const Container=styled.section`
 background-image: linear-gradient(to bottom right, rgb(68, 226, 139), rgb(68, 233, 90) );
  margin: 20px 80px 0px 80px;
  border-radius: 10px;
  display:flex;
  flex-wrap:wrap;
  min-height:80px;
  justify-content:space-evenly;
  align-items:center;
  z-index:1;


/* &:hover{
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  transition: 0.4s; }*/
  @media (max-width:765px){
    margin: 10px 20px;
    flex-wrap:nowrap;

  }

`

const Traco=styled.div`
    width:3px;
    height:50px;
    border-radius:30px;
    background:white;
`

const A=styled(Link)`
    padding:10px;
    cursor:pointer;
    font-family: Catamaran;
    font-weight: bold;
    font-size: 32px;
    text-align: center;
    color: white;
    text-decoration:none;

    &:hover{
      font-size:34px;
      transition: 0.2s;
    }
    @media (max-width:765px){
      font-size:15pt;

      &:hover{
        font-size:25px;
      }
    }

`




