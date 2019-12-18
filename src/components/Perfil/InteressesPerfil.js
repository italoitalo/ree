import React from 'react'
import styled from  'styled-components';


import NavPerfil from '../Rotas/NavPerfil';

export default function Interesses(){
    return(
        <>
            <Main>
                <NavPerfil/> 
                <Container>
                    <SectionInt>
                        <h1>No que você pode ajudar?</h1>
                    </SectionInt>

                    <SectionInt>
                        <h1>O que você precisa?</h1>
                    </SectionInt>
                </Container>
            </Main>
        </>
    )
}

const Main = styled.section`
    display:flex;
`
const Container = styled.section `
    width:100%;
    max-width:1360px;
    background-color:tomato;
    display:flex;
    padding:20px;
    justify-content:space-evenly;
`


const SectionInt = styled.section`
    display:flex;
    background-color:whitesmoke;
    padding:30px;
    border-radius:20px;
    `
