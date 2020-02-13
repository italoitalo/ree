import React from 'react'
import styled from  'styled-components'

import Mapa from './../img/formCadastroImg/mapa.jpg'

export default function newform() {
    return (
        <>
        
        <Container>
            <Box>
            <LadoA>
                <form>
                    <Ul>
                        <Li>
                        <Input type="number" name="" id="" placeholder="CPF" required/>                         
                        </Li>
                        <Li>
                        <Input1 type="number" name="" id="" placeholder="CEP" required/>                         
                        <Input1 type="text" name="" id="" placeholder="Estado" required/>                         
                        </Li>
                        <Li>
                        <Input1 type="text" name="" id="" placeholder="Rua" required/>                         
                        <Input1 type="number" name="" id="" placeholder="Numero" required/>                         
                        </Li>

                        <Li>
                        <Input1 type="text" name="" id="" placeholder="Bairro" required/>                         
                        <Input1 type="text" name="" id="" placeholder="Cidade" required/>                         
                        </Li>

                    </Ul>
                    <Button type="submit">Cadastre-se</Button>
                </form>
            </LadoA>
            
            <LadoB>
                <Img src={Mapa}/>
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
`

const H2 = styled.h1`
font-size:18px;
color:white;
z-index:1;
margin:60% 20px;
`

const Button = styled.button`
    margin-left: 40%;
    padding:10px 20px;
    font-weight:bolder;
    font-size:14px;
    color: #51B981;
    border: solid #51B981;
    &:hover{
        background: #51B981;
        color:white;
    }
`

const Input = styled.input`
padding:10px;
margin: 0 10px;
width: 94%;
`

const Input1 = styled.input`
padding:10px;
margin: 0 10px;
width:45%;
`

const Ul = styled.ul`
    margin: 50px;
    display: flex;
    flex-direction:column;
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
`

const LadoB = styled.div `
    display: flex;
    background:black;
    z-index:0;
    height:100%;
    width:40%;
    border-top-right-radius:10px;
    border-bottom-right-radius:10px;
`

const Container = styled.section`
height:100%;
width:100%;
display:flex;
justify-content: center;
padding:50px;

&:hover{
        background: #51B981;
}

`

const Box = styled.div`
border-radius:10px;
display:flex;
height:450px;
width:80%;
box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`