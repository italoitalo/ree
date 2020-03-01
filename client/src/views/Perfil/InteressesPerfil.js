import React from 'react'
import styled from  'styled-components';

import HeaderPrivt from './../../componentes/CabecalhoPrivado'

import Ilustracao01 from '../../img/PerfilInteresses/hands 3.png'
import Ilustracao02 from '../../img/PerfilInteresses/gift1.png'

import NavPerfil from './../../componentes/NavPerfil';

export default function Interesses(){
    return(
        <>
        <HeaderPrivt/>
            <Main>
                <NavPerfil/> 
                <Container>
                    <SectionInt>
                        <Title>No que você pode ajudar?</Title>
                        <Img alt="ilutracao2" src={Ilustracao02} height='100' width='100'/>
                        <Form>
                            <H1>Celulares</H1> 
                            <Input name='' id='' type='checkbox' value="teste"/>
                        </Form>
                        <Form>
                            <H1>Notebooks</H1> 
                            <Input name='' id='' type='checkbox' value="teste"/>
                        </Form>
                        <Form>
                            <H1>Computadores</H1> 
                            <Input name='' id='' type='checkbox' value="teste"/>
                        </Form>
                        <Form>
                            <H1>Periféricos</H1> 
                            <Input name='' id='' type='checkbox' value="teste"/>
                        </Form>
                        <Form>
                            <H1>Peças de Computador</H1> 
                            <Input name='' id='' type='checkbox' value="teste"/>
                        </Form>
                        <Form>
                            <H1>Cabos</H1> 
                            <Input name='' id='' type='checkbox' value="teste"/>
                        </Form>
                        <Form>
                            <H1>Eletronicos descartáveis</H1> 
                            <Input name='' id='' type='checkbox' value="teste"/>
                        </Form>

                        <Button type="submit">Confirmar</Button>
                    </SectionInt>

                    <SectionInt>
                        <Title>Do que você precisa?</Title>
                        <Img alt="ilustracao1" src={Ilustracao01} height='100' width='120'/>
                        
                        <Form>
                            <H1>Celulares</H1> 
                            <Input name='' id='' type='checkbox' value="teste"/>
                        </Form>

                        <Form>
                            <H1>Notebooks</H1> 
                            <Input name='' id='' type='checkbox' value="teste"/>
                        </Form>
                        <Form>
                            <H1>Computadores</H1> 
                            <Input name='' id='' type='checkbox' value="teste"/>
                        </Form>

                        <Form>
                            <H1>Periféricos</H1> 
                            <Input name='' id='' type='checkbox' value="teste"/>
                        </Form>
                        <Form>
                            <H1>Peças de Computador</H1> 
                            <Input name='' id='' type='checkbox' value="teste"/>
                        </Form>

                        <Form>
                            <H1>Cabos</H1> 
                            <Input name='' id='' type='checkbox' value="teste"/>
                        </Form>
                        <Form>
                            <H1>Eletronicos descartáveis</H1> 
                            <Input name='' id='' type='checkbox' value="teste"/>
                        </Form>
                        <Button type="submit">Confirmar</Button>
                    </SectionInt>
                </Container>
            </Main>
        </>
    )
}

const Button = styled.button`
    width:40%;
    background:#F2C94C;
    display:block;

    font-weight:normal;
    font-size:17px;
    color: black;
    margin-top:40px;
    margin-left:100px;

    &:hover {
    transition-duration:1s;
    background:#FFB23E;
    cursor: pointer
    }

    @media (max-width:765px){

        margin:10px 100px;
    }

  `
const Input = styled.input`
    margin-right:20px;
    margin-top:7px;
`

const Main = styled.section`
    display:flex;
    
    @media (max-width:765px){
    display:block;
}
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
    
    margin:30px;
    @media (max-width:765px){
        margin:0;
    }

`

const SectionInt = styled.section`
    display:flex;
    flex-direction:column;
    background-color:whitesmoke;

    min-width:400px;
    padding:10px;
    border-radius:20px;

    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);

    @media (max-width:765px){
        min-width:300px;
        width:300px;
        padding:0;
        margin:40px;

    }
`

const Form = styled.form`
display:flex;
justify-content:space-between;

background-color:white;

border-radius:50px;
padding:5px;
margin:5px;
`

const Title = styled.h1`
text-align: center;
color: #F2C94C;
font-weight: bold;
font-size:30px;
`

const H1 = styled.h1`
text-align:center;
margin-left: 20px;
`