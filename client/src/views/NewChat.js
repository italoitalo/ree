import React from 'react'
import styled from  'styled-components'

// import Mapa from './../img/formCadastroImg/mapa.jpg'
// import { Redirect } from 'react-router-dom'

import Cabecalho from './../componentes/CabecalhoPrivado'

export default function chat() {
    return (
        <>
        <Cabecalho />

        <Container> 
        <Box>
            
            <Texta>
                olá eu sou o paulo e tenho esse
                celular para doar!
            </Texta>

            <Textc>
                Olá, tudo bem?
            </Textc>
            
            <form>  
                <Textb/>
                <Buttona> Enviar </Buttona>
            </form>
        </Box>

        </Container>
        </>
    )
}

const Texta = styled.h1`
    font-size:10pt;
    font-weight: 400;
    border-top-right-radius: 3px;
    border-bottom-right-radius:3px;
    margin:5px;
    padding:5px;
    background:whitesmoke;
    width:50%;
    
    `

const Textb = styled.input`
    width:75%;
    margin:100px 0 0 0;
    padding:5px;
    background-color:whitesmoke;
    border:none;
    border-radius:5px;

    &:hover{
        border:none;
        border-radius:5px;
    
`
const Textc = styled.h1`
    align-self:flex-end;
    font-size:10pt;
    font-weight: 400;
    border-top-left-radius: 3px;
    border-bottom-left-radius:3px;
    margin:5px;
    padding:5px;
    background:whitesmoke;
    width:50%;
    
`
const Buttona = styled.button`
    padding:5px 25px;
    margin: 0 0 0 10px;
    border-radius:5px;
    background-image: linear-gradient(to bottom right, rgb(48, 206, 119), rgb(48, 213, 70) );    
    color:white;
    font-size:14pt;
    font-weight: bold;
    
`
const Box = styled.section`
    display:flex;
    flex-direction:column;
    margin: 30px;
    padding:10px;
    border-radius:3px;
    height:100%;
    min-width: 500px;
    box-shadow: 0 0 30px 0 rgba(0,0,0,0.1)

    `
const Container = styled.section`
    display:flex;
    flex-direction: column;
    align-items: center;
    
`