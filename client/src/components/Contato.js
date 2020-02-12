import React from 'react'
import styled from 'styled-components'
import papeldeParede from './../img/TelaContatos/fundoContatos.png'
import twitter from './../img/SocialMedia/twitter-black-shape.svg'
import facebook from './../img/SocialMedia/facebook-logo.svg'
import github from './../img/SocialMedia/github-character.svg'
import instagram from './../img/SocialMedia/instagram-symbol.svg'
import linkedin from './../img/SocialMedia/linkedin-letters.svg'

import Cabecalho from './Rotas/Cabecalho'

export default function Contato(){
    return(
    <Container>
            <Banner>
                <H1>Tem alguma dúvida? Entre em contato!</H1>
            </Banner>
            <Flex>
                <DivForm>
                    <H1Form>Envie um e-mail para nossa equipe!</H1Form>
                    <Inputs>
                        <Input type="text" name="nome" id="nome"  placeholder="Nome"/>
                        <Input type="text" name="Sobrenome" id="snome" placeholder="Sobrenome"/>
                        <Input type="email" name="E-mail" id="email" placeholder="email"/>
                        <TextareaContat name="Suas dúvidas" id="textarea" cols="30" rows="4" placeholder="Suas dúvidas"></TextareaContat>
                    </Inputs>
                    <Button>Enviar</Button>
                </DivForm>

                <DivForm>
                    <H1Form>Nos encontre nas Redes Sociais!</H1Form>
                    <Flex>
                        <Block>
                            <A href="https://twitter.com/equiperee" target="_blank"> <img alt="icontwitter" src={twitter} height="40px"/></A>
                            <A href="https://facebook.com/" target="_blank"> <img  alt="iconfacebook" src={facebook}height="40px"/></A>
                            <A href="https://www.instagram.com/equiperee/" alt="iconinstagran" target="_blank"> <img src={instagram}height="40px" alt="icone intagram"/></A>
                            <A href="https://github.com/" target="_blank"> <img alt="icongithub" src={github}height="40px"/></A>
                            <A href="https://www.linkedin.com/" target="_blank"> <img alt="icontlinkedin" src={linkedin}height="40px"/></A>
                        </Block>
                    </Flex>

                </DivForm>
            </Flex>
    </Container>
    )
}
const Block = styled.div `
@media (max-width:760px){
    display:flex;
}
`

const A = styled.a`
    margin:10px;
    height:45px;
    width:45px;
    padding:10px;

    @media (max-width:760px){
        margin: 0;
        display: block;
    }
`
const Flex = styled.div `
display:flex;
justify-content:center;

@media (max-width: 760px){
    flex-direction: column;
}
    
    
`
const Banner = styled.div`
    background-image: linear-gradient(to bottom right, rgb(68, 226, 139), rgb(68, 233, 90) );
        
    margin: 10px 150px 10px 150px;
    border-radius: 10px;
    min-height:80px;
    justify-content:space-evenly;
    align-items:center;
    z-index:1;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);


    @media (max-width: 760px) {

        margin:0 auto;
        min-height: 40px;
        max-width:200px;
        margin-top:20px;
        border-radius: 5px;
    }
`;

const Container = styled.section`
    display:flex;
    flex-direction:column;
    background-image:url(${papeldeParede});
    background-repeat:no-repeat;
    background-size: 100%;
    background-attachment: fixed;


`

const H1 = styled.h1`
    text-align:center;
    margin:20px;
    font-size: 40px;
    color:white;


    @media (max-width: 760px){
        font-size: 20px;
        margin:5px
        
    }
`

const DivForm = styled.div`
    display:flex;
    border-radius:10px;
    padding:30px 0 30px 0;
    align-self:center;
    margin:-30px 10px 10px 0px;
    max-width:400px;
    flex-flow: column wrap;
    background: white;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);  
    
    @media (max-width: 760px){
        padding:10px;
        width: 300px;
        margin: -10px 0px 50px 0px;

    }
`

const H1Form = styled.h1`

    font-weight: bold;
    font-size: 20px;
    text-align: center;

    background: -webkit-linear-gradient(rgb(68, 233, 90),rgb(39, 177, 58) );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 760px){
        font-size:15px;
        max-width: 150px;
        margin-left:60px;
}
`

const Inputs = styled.div`
    display:flex;
    flex-flow: column wrap;
`

const Input = styled.input`
    display:flex;
    justify-content:stretch;
    margin:15px 40px 15px 40px;
    padding:10px;
    flex-flow: row wrap;
    
    background: white;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;

    ::-webkit-input-placeholder{
        color: #BBBBBB;
        font-weight: bold;
    }

    @media (max-width: 760px){

        font-size:12px;
        margin: 10px 0px 10px 10px auto;
        max-width: 200px;
    }
`

const TextareaContat = styled.textarea`
    margin:10px;
    max-height:200px;
    border:none;
    font-weight: bold;
    background: -webkit-linear-gradient(rgb(68, 233, 90),rgb(39, 177, 58) );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background:white;
    margin:15px 40px 15px 40px;
    padding: 10px;
    font-size: 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);


    ::-webkit-input-placeholder{
        color: #BBBBBB;
        font-weight: bold;
    }

    @media (max-width:760px){
        margin: 0 auto;
        max-width: 300px;
        font-size: 12px;

    }
`

const Button = styled.button`
    width: 100px;
    height: 40px;
    align-self: center;
    color: whitesmoke; 
    background-image: linear-gradient(to bottom right, rgb(68, 226, 139), rgb(68, 233, 90) );
    
    font-family:'Catamaran', sans-serif;
    font-weight:bolder;
    margin: 10px 0 10px;
    transition: 0.3s;
    
    &:hover{
        transition: 0.3s;
        background-image: linear-gradient(to bottom right, rgb(168, 226, 139), rgb(68, 233, 90) );
    }
`
