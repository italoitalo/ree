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
                        <Form>
                        
                        <Img alt="ilutracao2" src={Ilustracao02} height='100' width='100'/>
                            <H1>Celulares <input name='' id='' type='checkbox' value="teste"/></H1> 
                           
                            <H1>Notebooks <input name='' id='' type='checkbox' value="teste"/></H1> 
                            
                            <H1>Computadores <input name='' id='' type='checkbox' value="teste"/></H1> 
                            
                            <H1>Periféricos <input name='' id='' type='checkbox' value="teste"/></H1> 
                           
                            <H1>Peças de Computador <input name='' id='' type='checkbox' value="teste"/></H1> 
                           
                            <H1>Cabos <input name='' id='' type='checkbox' value="teste"/></H1> 
                           
                            <H1>Eletronicos descartáveis <input name='' id='' type='checkbox' value="teste"/></H1> 
                        </Form>

                        <Button type="submit">Confirmar</Button>
                    </SectionInt>

                    <SectionInt>
                        <Title>No que você pode ajudar?</Title>
                        <Form>
                        
                        <Img alt="ilutracao2" src={Ilustracao01} height='100' width='100'/>
                            <H1>Celulares <input name='' id='' type='checkbox' value="teste"/></H1> 
                           
                            <H1>Notebooks <input name='' id='' type='checkbox' value="teste"/></H1> 
                            
                            <H1>Computadores <input name='' id='' type='checkbox' value="teste"/></H1> 
                            
                            <H1>Periféricos <input name='' id='' type='checkbox' value="teste"/></H1> 
                           
                            <H1>Peças de Computador <input name='' id='' type='checkbox' value="teste"/></H1> 
                           
                            <H1>Cabos <input name='' id='' type='checkbox' value="teste"/></H1> 
                           
                            <H1>Eletronicos descartáveis <input name='' id='' type='checkbox' value="teste"/></H1> 
                        </Form>

                        <Button type="submit">Confirmar</Button>
                    </SectionInt>
                </Container>
            </Main>
        </>
    )
}

const Button = styled.button`
    height:60px;
    width:50%; 
    background-image: linear-gradient(to bottom right, rgb(68, 226, 139), rgb(68, 233, 90) );
    display:block;

    font-weight:bold;
    font-size:17px;
    color: white;
    margin-top:40px;
    margin-left:100px;

    &:hover {
    background-image: linear-gradient(to bottom right, rgb(68, 255, 139), rgb(68, 255, 90) );
    cursor: pointer
    }

    @media (max-width:765px){

        margin:10px 100px;
    }

  `

const Main = styled.section`
    display:flex;
    
    @media (max-width:765px){
    display:block;
}
`
const Img = styled.img`
    display:block;
    position:absolute;
    height:180px;
    width: 160px;

    @media (max-width:765px){
        height: 120px;
        width: 100px;
    }
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
    background-color:white;
    height:100%;
    min-width:400px;
    padding:10px;
    border-radius:20px;

    box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.1);

    @media (max-width:765px){
        min-width:300px;
        width:300px;
        padding:0;
        margin:40px;

    }
`

const Form = styled.form`
display:flex;
flex-direction:column;
justify-content:space-between;
padding:5px;
margin:5px;
`

const Title = styled.h1`
text-align: center; 
color: rgba(0,0,0,0.8);
font-weight: bold;
font-size:20pt;
`

const H1 = styled.h1`
text-align:end;
margin-left: 20px;
`