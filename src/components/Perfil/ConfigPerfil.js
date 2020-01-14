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
                    <SectionColumn>
                        <SectionInt>
                        <SectionFlex><Title>Configurações  Pessoais</Title></SectionFlex>
                            <SectionFlex>
                            <DivRetangulo> <H1T>Alterar foto </H1T> </DivRetangulo></SectionFlex>
                            <SectionFlex>
                            <ImgConf src={Foto} width='175'></ImgConf>
                            <ImgConf src={Seta} width='64'   height='50'></ImgConf>
                            <ImgConf src={Img} width='183'></ImgConf>
                            </SectionFlex>
                            <SectionCol>
                                <Main>
                                <PT>Alterar Nome:</PT>
                                <InputRee type='text'></InputRee>
                                </Main>
                                <Main>
                                <PT>Data de nascimento:</PT> 
                                <InputRee type='text'></InputRee>
                                </Main>
                                <Main>
                                <PT>Alterar numero:</PT> 
                                <InputRee type='text'></InputRee>
                                </Main>
                           
                            </SectionCol>
                        </SectionInt>

                        <SectionInt>
                            <SectionFlex><Title>Configurações de conta</Title></SectionFlex>
                            <SectionCol>
                                <Main>
                                <PT>Alterar Nome:</PT> 
                                <InputRee type='text'></InputRee>
                                </Main>
                                <Main>
                                <PT>Data de nascimento:</PT>
                                <InputRee type='text'></InputRee>
                                </Main>
                                <Main>
                                <PT>Alterar numero:</PT>
                                <InputRee type='text'></InputRee>
                                </Main>
                            </SectionCol>
                        </SectionInt>

                        <SectionInt>
                            <SectionFlex><Title>Configurações de segurança</Title></SectionFlex>
                            <SectionCol>
                                
                                <Main>
                                <PT>Mostrar informações de localização publicamente Mostrar numero de celular públicamente:</PT>
                                <InputReeCheckBox type='checkbox' checked></InputReeCheckBox>
                                </Main>
                                <Main>
                                <PT>Mostrar numero de celular públicamente:</PT> 
                                <InputReeCheckBox type='checkbox'></InputReeCheckBox>
                                </Main>
                            </SectionCol>
                        </SectionInt>

                    </SectionColumn>
                </Container>
            </Main>
        </>
    )
}


const InputReeCheckBox = styled.input`
border-radius: 25px;
background-color:rgba(0, 0, 0, 0.1);
`

const SectionColumn = styled.section`
display:flex;
flex-direction:column;
`

const SectionInt = styled.section`
    display:flex;
    margin:15px;
    width:600px;
    flex-direction:column;
    background-color:whitesmoke;
    padding:30px;
    border-radius:20px;
`

const InputRee = styled.input`
background-color:whitesmoke;
width: 1000px;
padding: 5px;
margin:5px;

&:hover{
        background:white;
        transition:0.3s;
        
        border-radius:5px;
    }
    &:focus{
        background:white;
        transition:0.5s;
        border-radius:30px;
    }
`
const PT = styled.p`
width: 100%;
align-self:flex-end;
`

const  SectionCol = styled.section`

padding:  5px;
display:flex;
flex-direction: column;
align-items: flex-stretch;`



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
background-color:rgba(0, 0, 0, 0.09);
border-radius:50px;
padding:5px;
margin:10px;
justify-content: center;
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
font-size: 2.5em;
`

const H1 = styled.h1`
font-size: 20em;


`
const H1T = styled.h1`
font-size: 1em;

`