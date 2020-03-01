import React from 'react';
import styled from 'styled-components';


import DoacoesPublicas from './DoacoesPublicas';
import HeaderPrivt from './../componentes/CabecalhoPrivado'
/* import Cabecalho from '../components/Rotas/Cabecalho'; */




export default function Home() {
    return ( 
        <>
        <HeaderPrivt/>
        <Container >

        <DoacoesPublicas />

        </Container> 
        </>
    )
}



const Container = styled.section `
        display:flex;
        
        justify-content:center;
        align-items:center;
`;