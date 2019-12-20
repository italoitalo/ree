import React from 'react'
import styled from  'styled-components';

import NavPerfil from '../Rotas/NavPerfil';

import Foto from '../../img/PerfilConfiguracao/foto.png';
import Seta from '../../img/PerfilConfiguracao/Arrow.png';
import Img from '../../img/PerfilConfiguracao/img.png';


export default function ConfigPerfil(){
    return(
        <>
            <Main>
                <NavPerfil/> 
                <Container>
                    <SectionInt>
                        <Title>Configurações  Pessoais</Title>
                        <DivRetangulo> <H1T>Alterar foto </H1T> </DivRetangulo>
                        <SectionFlex>
                        <ImgConf src={Foto} width='175'></ImgConf>
                        <ImgConf src={Seta} width='64'   height='50'></ImgConf>
                        <ImgConf src={Img} width='183'></ImgConf>
                        </SectionFlex>
                        <SectionCol>
                            <Section2Flex><PT>Alterar Nome:</PT> <input type='text'></input></Section2Flex>
                            <Section2Flex><PT>Alterar data de nascimento:</PT> <input type='text'></input></Section2Flex>
                            <Section2Flex><PT>Alterar numero:</PT> <input type='text'></input></Section2Flex>
                        </SectionCol>
                    </SectionInt>


                </Container>
            </Main>
        </>
    )
}

const PT = styled.p`
padding:0 5px 0 0;`

const  SectionCol = styled.section`
padding:  5px;
display:flex;
flex-direction: column;
align-items: flex-stretch;`

const Section2Flex =  styled.section`
padding: 5px;
display:flex;
justify-content: center;`

const ImgConf = styled.img`
padding: 5px;
flex: 0;
`
const SectionFlex = styled.section`
justify-content: center;
align-items: center;
display:flex    `
const DivRetangulo = styled.form`
width:180px;
height:  30px;
display:flex;
background-color:grey;
border-radius:50px;
padding:5px;
margin:10px;
`

const Main = styled.section`
    display:flex;
`
const Container = styled.section `
    width:100%;
    max-width:1360px;
    display:flex;
    justify-content: center;
    padding:20px;
    justify-content:space-evenly;
`

const Input = styled.input`

`

const SectionInt = styled.section`
    display:flex;
    width:600px;
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
const H1T = styled.h1`
margin-left:20px;

`