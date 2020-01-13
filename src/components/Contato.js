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
    flex-direction:column;
 

`;
const Content = styled.section`
    display:flex;
    flex-direction:column;


`;

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

    
`;
const DivMain = styled.section`
     background-image:url(${papeldeParede});
     display:flex;
     justify-content:center;
     border-top: 12px solid #51B981;
    
`

const DivForm = styled.div`
    display:flex;
    flex-direction:column;
    flex: 0 1 auto; 
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    min-width:561px;
`;
const H1Form = styled.h1`
    margin-top:30px;
    align-self:center;

    font-family: Catamaran;
    font-style: normal;
    font-weight: bold;
    font-size: 13.1015px;
    line-height: 21px;
    text-align: center;

color: #51B981;
`;
const Inputs = styled.div`
    display:flex;
   flex-direction:column;
   
   
   
`;
const Input = styled.input`
    display:flex;
    justify-content:stretch;
    margin:20px;


    font-family: Catamaran;
    font-style: normal;
    font-weight: bold;
    font-size: 13.1015px;
    line-height: 21px;

    ::-webkit-input-placeholder{
        color: #BBBBBB;
        font-weight: bold;
    }
`;
const TextareaContat = styled.textarea`
    margin:10px;
    border:none;
    font-weight: bold;
    color:#51B981;
    margin:20px;

    ::-webkit-input-placeholder{
        color: #BBBBBB;
        font-weight: bold;
    }
`;
