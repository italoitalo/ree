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
                        <Title>No que você pode ajudar?</Title>
                        <Form>
                            <H1>teste</H1> 
                            <Input name='' id='' type='checkbox' value="teste"/>
                        </Form>
                        <Form>
                            <H1>teste</H1> 
                            <Input name='' id='' type='checkbox' value="teste"/>
                        </Form>
                    </SectionInt>

                    <SectionInt>
                        <Title>O que você precisa?</Title>
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
    display:flex;
    padding:20px;
    justify-content:space-evenly;
`

const Input = styled.input`

`

const SectionInt = styled.section`
    display:flex;
    flex-direction:column;
    background-color:whitesmoke;
    padding:30px;
    border-radius:20px;
`

const Form = styled.form`
display:flex;
background-color:white;
border-radius:50px;
padding:5px;
margin:10px;
`

const Title = styled.h1`
color: #F2C94C;
font-weight: bold;
font-size:30px;
`

const H1 = styled.h1`
margin-left:20px;
`