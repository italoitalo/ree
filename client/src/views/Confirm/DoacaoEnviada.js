import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom'; 

import doacao from '../../../src/img/confirm/deliver.svg'

export default function DoacaoEnviada(){
    return(
        <>
        <Container>
            <Img src={ doacao }/>

            <Column>
                <H1>Sua Doação foi enviada com sucesso!</H1>
                <Navigation to="/doe"> Continuar Doando!</Navigation>
                <Navigation to="/private"> Voltar para página inicial.</Navigation>
                
            </Column>


        </Container>
        </>
    )
}


const Container = styled.section`
    
    display:flex;
    justify-content: center;
    height: 400px;
    margin: 50px;
    align-items: center;
    text-align:center;
    color: rgba(0, 0, 0, 0.8);
`

const Navigation = styled(Link)`
    text-decoration:none;
    color: #51B981;
    font-weight:600;
    font-size: 16pt;
    
    &:hover{
        color: #56f5a0;
    }
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
`

const H1 = styled.h1 `
    font-size: 25pt;
`

const Img = styled.img`
    max-height:300px
`