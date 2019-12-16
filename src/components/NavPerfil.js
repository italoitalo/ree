import React from 'react';
import styled from  'styled-components';
import Avatar1 from './../img/formCadastroImg/avatar1.png'

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
                    <A href="/"><H4>Biografia</H4></A>
                </Botao>

                <Botao>
                <A href="/"><H4>Doações</H4></A>
                </Botao>

                <Botao>
                <A href="/"><H4>interesses</H4></A>
                </Botao>

                <Botao>
                   <A href="/"><H4>Configurações</H4></A> 
                </Botao>
                
            </Nav>
            </Container>
        </div>
    )
}

const Container = styled.section`
    margin-right:310px;
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
    transition: 0.3s;
    background-color: white;
  }
`

//FUNDO VERDE CLARO
const Nav = styled.div`
    height: 100%;
    width: 300px;
    position: fixed; 
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
const A = styled.a`
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

