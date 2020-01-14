import React from 'react'
import styled from 'styled-components'
import papeldeParede from './../img/TelaContatos/fundoContatos.png'

export default function Contato(){
    return(
        <Container>
            <Content>
                <H1>Tem alguma dúvida? Entre em contato!</H1>
                <DivMain>
                    
                    <DivForm>
                        <H1Form>Envie um e-mail para nossa equipe!</H1Form>
                        <Inputs>
                            <Input type="text" name="nome" id="nome"  placeholder="Nome"/>
                            <Input type="text" name="Sobrenome" id="snome" placeholder="Sobrenome"/>
                            <Input type="email" name="E-mail" id="email" placeholder="email"/>
                            <TextareaContat name="Suas dúvidas" id="textarea" cols="30" rows="10" placeholder="Suas dúvidas"></TextareaContat>
                        </Inputs>
                    </DivForm>
                </DivMain>
            </Content>
        </Container>
    )
}


const Container = styled.section`
    display:flex;
    flex-flow:column wrap;
    flex: 0 1 100%;
    height:auto;
`

const Content = styled.section`
    display:flex;
    flex-flow:column wrap;
    background: whitesmoke;
`

const H1 = styled.h1`
    display:flex;
    align-self:center;
    margin:30px;

    font-family: Catamaran;
    font-style: normal;
    font-weight: 800;
    font-size: 44.8498px;
    line-height: 37px;
    text-align: center;

    background: -webkit-linear-gradient(yellow,darkorange);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const DivMain = styled.section`
     background-image:url(${papeldeParede});
     flex: 0 1 100%;
     min-height:75vh;
     background-repeat: round;
     display:flex;
     flex-flow: row wrap;
     justify-content:center;
     border-top: 12px solid #51B981;   
`

const DivForm = styled.div`
    display:flex;
    flex-flow: column wrap;
    flex: 0 1 40%; 
    background: whitesmoke;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);   
`

const H1Form = styled.h1`
    margin-top:30px;
    align-self:center;

    font-family: Catamaran;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    text-align: center;

    color: #51B981;
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
    
    background: whitesmoke;
    font-family: Catamaran;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;

    &:hover{
        background:white;
        transition:0.3s;
        
        border-radius:5px
    }
    &:focus{
        background:white;
        transition:0.5s;
        border-radius:30px;
    }

    ::-webkit-input-placeholder{
        color: #BBBBBB;
        font-weight: bold;
    }
`

const TextareaContat = styled.textarea`
    margin:10px;
    border:none;
    font-weight: bold;
    color:#51B981;
    background:whitesmoke;
    margin:15px 40px 15px 40px;
    padding: 10px;
    font-size: 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);

    &:hover{
        background:white;
        transition:0.3s;
    }
    &:focus{
        background:white;
        transition:0.3s;
        border-radius:30px;
    }
    ::-webkit-input-placeholder{
        color: #BBBBBB;
        font-weight: bold;
    }
`
