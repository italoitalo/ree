import React from 'react'
import styled from  'styled-components'

import HeaderPub from './../componentes/CabecalhoPublico'

import Porta from './../img/formCadastroImg/porta.jpg'

export default function newform() {
    
    
    return (
        <>
        <HeaderPub/>
        <Container>
            <Box>
                <LadoA>
                    <form action="/cadastro" method="POST">
                        <Ul>
                            <Li>
                            <Input1 type="text" name="nome" id="nome" placeholder="Nome" required/>                         
                            <Input1 type="text" name="sobrenome" id="sobrenome" placeholder="Sobrenome" required/>                         
                            </Li>
                        
                            <Li>
                            <Input type="password" name="senha" id="senha" placeholder="Senha" required/>                         
                            </Li>

                            <Li>
                            <Input type="email" name="email" id="email" placeholder="E-mail" required/>                         
                            </Li>

                            <Li>
                            <Input type="number" name="celular" id="celular" placeholder="Celular"/>                         
                            </Li>

                        </Ul>
                        <Button type="submit">Cadastre-se</Button>
                    </form>
                </LadoA>
                
                <LadoB>
                    <Img alt="imagemporta" src={Porta}/>
                    <H1>Faça Parte</H1>
                    <H2>A diferença está em suas mãos</H2>
                </LadoB>
            </Box>
        </Container>
        </>
    )
}

const Img = styled.img`
    width:100%;
    height:100%;
    border-top-right-radius:10px;
    border-bottom-right-radius:10px;
    opacity:0.5;
    z-index:0;
`

const H1 = styled.h1`
font-size:40px;
color:white;
z-index:1;
margin:40% -240px;

 @media (max-width: 768px) {
     font-size: 27pt;
     margin: 10% -300px;
 }
`

const H2 = styled.h1`
font-size:18px;
color:white;
z-index:1;
margin:60% 20px;

@media (max-width: 768px) {
    display: none;
}
`

const Button = styled.button`
    margin-left: 40%;
    padding:20px 40px;
    font-weight:bolder;
    font-size:16px;
    color: rgb(68, 226, 139);
    border: solid rgb(68, 226, 139);

    &:hover{
        background-image: linear-gradient(to bottom right, rgb(68, 226, 139), rgb(68, 233, 90) );
        color:white;
    }
    
    @media (max-width: 768px) {
        margin-left: 30%;
        padding: 10px 20px;
    }
`

const Input = styled.input`
padding:10px;
margin: 0 10px;
width: 90%;
@media (max-width: 768px) {
    margin: 5px 10px;
}
`

const Input1 = styled.input`
padding:10px;
margin: 0 10px;
width:40%;
@media (max-width: 768px) {
    width: 90%;   
    margin: 5px 10px;
}
`

const Ul = styled.ul`
    margin: 50px;
    display: flex;
    flex-direction:column;

    @media (max-width: 768px) {
        margin:10px;
    }
`

const Li = styled.li`
margin: 10px;
`


const LadoA = styled.div `
    background:white;
    height:100%;
    width:80%;
    border-top-left-radius:10px;
    border-bottom-left-radius:10px;

    @media (max-width: 768px) {
        width: 100%;
        border-bottom-left-radius:0px;
        border-top-left-radius:10px;
        border-top-right-radius:10px;
}
`

const LadoB = styled.div `
    display: flex;
    background:black;
    z-index:0;
    height:100%;
    width:40%;
    border-top-right-radius:10px;
    border-bottom-right-radius:10px;

    @media (max-width: 768px) {
        height: 120px;
        width:100%;
        border-top-right-radius:0px;
        border-bottom-right-radius:10px;
        border-bottom-left-radius:10px;

}
`

const Container = styled.section`
height:100%;
width:100%;
display:flex;
justify-content: center;
padding:50px;

&:hover{
    background: rgb(68, 226, 139);
}
@media (max-width: 768px) {
    height: 700px;
    padding:20px;
    &:hover{
        background: rgba(255, 255, 255, 0);
    }   
}
`

const Box = styled.div`
border-radius:10px;
display:flex;
height:450px;
width:80%;
box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);

@media (max-width: 768px) {
        display: block;
        width:100%
    }
`