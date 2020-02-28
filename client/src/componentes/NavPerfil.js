import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';


import Avatar1 from '../img/formCadastroImg/avatar1.png'


export default function NavPerfil() {
    return ( 
            <section>
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
            
            </section>
    )
}

// BOTAO VERDE ESCURO (HOVER)
const Botao = styled.div` 

    padding: 5px;
    margin: 30px 0 30px 40px;
    border-top-left-radius:5px;
    border-bottom-left-radius:5px;
    transition: 0.2s;
    
   &:hover {
    transition: 0.1s;
    background-color: white;
  }

  @media (max-width:765px){
    display:block;
    margin: 5px;

    &:hover {
    border-top-right-radius:5px;
    border-bottom-right-radius:5px;
    }
}
`

//FUNDO VERDE CLARO
const Nav = styled.div`
    height:700px;
    width: 300px;
    position: relative; 
    background-image: linear-gradient(to bottom right, rgb(68, 226, 139), rgb(68, 233, 90) );

    @media (max-width: 768px) {
        display:flex;
        width: 100%;
        height: 100%;
}
`
//TITULO DOS BOTOES
const H1 = styled.h1`
    text-align: center;
    font-size: 35px;
    margin-bottom:-20px;
 
    @media (max-width:765px){
        margin:0;
}
`
//NOME
const H3 = styled.h3`
    text-align: center;
    font-size:18px;
`
//SOBRENOME
const H4 = styled.h4`
    text-align: center;

    @media (max-width:765px){
        font-size: 11.5pt
}
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

    @media ( max-width:765px){
        display:none;
    }
`

const Avatar = styled.div`
    height:100px;
    width:100px;

    background-image: url(${Avatar1});
    background-size: 100%;
    background-repeat:no-repeat;

    margin-left: 100px;
`

