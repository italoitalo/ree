import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import Avatar1 from '../../img/formCadastroImg/avatar1.png'


export default function NavPerfil() {
    return ( 
        <div>
            <Container>
            <Nav>
                <Div>
                    <Avatar/>
                    <H1>João</H1>
                    <H3>Silva</H3>
                </Div>
                <Botao>
                    <Navigation to="/perfil"><H4>Biografia</H4></Navigation>
                </Botao>

                <Botao>
                <Navigation to="/perfil/doacoes"><H4>Doações</H4></Navigation>
                </Botao>

                <Botao>
                <Navigation to="/perfil/interesses"><H4>interesses</H4></Navigation>
                </Botao>

                <Botao>
                   <Navigation to="/perfil/config"><H4>Configurações</H4></Navigation> 
                </Botao>
                
            </Nav>
            </Container>
        </div>
    )
}



const Container = styled.section`
    
`

// BOTAO VERDE ESCURO (HOVER)
const Botao = styled.div`
    background-color: #51B981;

    padding: 5px;
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left: 40px;

   border-top-left-radius:15px;
   border-bottom-left-radius:15px;

   &:hover {
    transition: 0.5s;
    background-color: white;
  }
`

//FUNDO VERDE CLARO
const Nav = styled.div`
    height:700px;;
    width: 300px;
    position: relative; 
    background-image: linear-gradient(#6CD79D, #6CD79D); 
`
//TITULO DOS BOTOES
const H1 = styled.h1`
    text-align: center;
    font-size: 35px;
    margin-bottom:-20px;
`
//NOME
const H3 = styled.h3`
    text-align: center;
    font-size:18px;
`
//SOBRENOME
const H4 = styled.h4`
    text-align: center;
`
//LINK (texto dos botoes)
const Navigation = styled(Link)`
    text-decoration: none;
    font-size: 25px;
    color: black;
`
//PERFIL (FOTO NOME SOBRENOME)
const Div = styled.div`
    padding-top: 50px;
`

const Avatar = styled.div`
    height:100px;
    width:100px;

    background-image: url(${Avatar1});
    background-size: 100%;
    background-repeat:no-repeat;

    margin-left: 100px;
`

