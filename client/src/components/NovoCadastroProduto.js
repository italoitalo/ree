import React from 'react'
import styled from  'styled-components'


import Porta from './../img/formCadastroImg/porta.jpg'

export default function newform() {
    
    
    return (
        <>
        <Container>
            <Banner>
                <H1>Para começar,<br/>nos diga algumas coisas</H1>
            </Banner>
                <form action="/cadastroproduto" method="POST">
        
                    <Box>
                        <Title>Oque quer doar?</Title>
                        
                        <input type="radio" name="tipo" id="tipo" value="Celular" required/>Celular
                        <input type="radio" name="tipo" id="tipo" value="Notebook" required/>Notebook
                        <input type="radio" name="tipo" id="tipo" value="Fones" required/>Fones
                        <input type="radio" name="tipo" id="tipo" value="Cabos" required/>Cabos
                        <input type="radio" name="tipo" id="tipo" value="Gadgets" required/>Gadgets
                   
                    </Box> 

                    <Box>
                        <Title>Qual o estado do seu item?</Title>
                        
                        <input type="radio" name="estado" id="estado" value="Péssimo" required/>Péssimo
                        <input type="radio" name="estado" id="estado" value="Ruim" required/>Ruim
                        <input type="radio" name="estado" id="estado" value="Bom" required/>Bom
                        <input type="radio" name="estado" id="estado" value="Ótimo" required/>Ótimo
                        <input type="radio" name="estado" id="estado" value="Perfeito" required/>Perfeito
                    </Box> 

                    <Box>
                        <Title>Mande uma foto do seu item</Title>
                        <input type="file" name="fotoProduto" id="fotoProduto" required/>
                    </Box> 

                    <Box>
                        <Title>insira sua Descrição!</Title>
                        <input type="text" name="nome" id="nome" placeholder="Titulo da doação" required/> 
                        <input type="text" name="caracteristicas" id="caracteristicas" placeholder="caracteristicas" required/> 
                    </Box> 

                    <button type="submit"> submit </button>
                </form>
        </Container>
        </>
    )
}
const Title = styled.h1`
    font-size:35pt;
    color: rgba(0,0,0,0.8);
`

const Box = styled.section`
    background:white;
    height:350px;
    width:1000px;
    margin-top: -50px;
    margin-bottom:400px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);

    text-align: center;
`

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const Banner = styled.section`
    min-height:250px;
    width:100%;
    background-image: linear-gradient(to bottom right, rgb(68, 226, 139), rgb(68, 233, 90) );
    justify-content:center;
`

const H1 = styled.h1`
    font-size:70px;
    color: whitesmoke;
    margin-top:25px;
    margin-left:160px;
    font-weight:900;
    line-height: 0.9;
`