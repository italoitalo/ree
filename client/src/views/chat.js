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
          
        <Texta id="w3mission" rows="4" cols="50" >
        olá eu sou o paulo e tenho esse
        celular para doar!
    </Texta>

    <form>  
        <Textb id="w3mission" rows="4" cols="50">
           Digite aqui sua mensagem: 
        </Textb>
        <Buttona type="submit" > envia sua 
            mensagem</Buttona>
    </form>

        </Container>
        </>
    )
}

const Texta = styled.textarea`
 margin: 0 0 0 -50px; 
    resize:none;
`
const Textb = styled.textarea`
    margin: 0 0 0 100px; 
    resize: both; 
`
const Buttona = styled.button`
    background:green;
    color:white;
    border-radius: 0;
    
`

const Container = styled.section`
    display:flex;
    flex-direction: column;
    align-items: center;
    
`

/* const Forma = styled.form`
    display:flex;
    flex-direction:column;
    background-color:hsla(89, 59%, 57%, 0.65);
` */