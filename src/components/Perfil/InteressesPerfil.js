import React from 'react'
import styled from  'styled-components';

import Ilustracao01 from './../../img/PerfilInteresses/hands 2.png'
import Ilustracao02 from './../../img/PerfilInteresses/gift1.png'
import NavPerfil from '../Rotas/NavPerfil';

export default function Interesses(){
    return(
        <>
            <Main>
                <NavPerfil/> 
                <Container>
                    <SectionInt>
                        <Title>No que você pode ajudar?</Title>
                        <Img src={Ilustracao02} height='100' width='100'/>
                        <Form>
                            <H1>teste</H1> 
                            <input name='' id='' type='checkbox' value="teste"/>
                        </Form>

                        <Form>
                            <H1>teste</H1> 
                            <input name='' id='' type='checkbox' value="teste"/>
                        </Form>
                    </SectionInt>

                    <SectionInt>
                        <Title>Do que você precisa?</Title>
                        <Img src={Ilustracao01} height='100' width='120'/>
                        <Form>
                            <H1>teste</H1> 
                            <input name='' id='' type='checkbox' value="teste"/>
                        </Form>

                        <Form>
                            <H1>teste</H1> 
                            <input name='' id='' type='checkbox' value="teste"/>
                        </Form>
                    </SectionInt>
                </Container>
            </Main>
        </>
    )
}

const Main = styled.section`
    display:flex;
`
const Img = styled.img`
    margin-left:50px;
`
const Container = styled.section `
    width:100%;
    max-width:1360px;

    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    
    padding:20px;
    margin:30px;

`

const SectionInt = styled.section`
    display:flex;
    flex-direction:column;
    background-color:whitesmoke;
    min-width:400px;
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
text-align:center;
`