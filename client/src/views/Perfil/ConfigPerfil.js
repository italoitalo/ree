import React from 'react'
import styled from  'styled-components';

import NavPerfil from './../../componentes/NavPerfil';

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
                        <SectionFlex>
                            <Title>Configurações  Pessoais</Title>
                        </SectionFlex>
                        <SectionFlex>
                            <button>Alterar foto </button>
                            <ImgConf alt="imagem de foto" src={Foto} width='175'></ImgConf>
                            <ImgConf alt="imagemSeta" src={Seta} width='64'   height='50'></ImgConf>
                            <ImgConf alt="imagem55" src={Img} width='183'></ImgConf>
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
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    padding:30px;
    border-radius:20px;
`

const InputRee = styled.input`
width: 1000px;
padding: 5px;
margin:5px;
`

const PT = styled.p`
width: 100%;
align-self:flex-end;
`

const  SectionCol = styled.section`
padding:  5px;
display:flex;
flex-direction: column;
align-items: flex-stretch;
`

const ImgConf = styled.img`
padding: 5px;

flex: 0;
`
const SectionFlex = styled.section`
justify-content: center;
align-items: center;
display:flex;
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

const Title = styled.h1`
color: #F2C94C;
font-weight: bold;
font-size:30px;
font-size: 2.5em;
`