import React from 'react'
import styled from  'styled-components'

import HeaderPrivt from './../componentes/CabecalhoPrivado'
/* import Porta from './../img/formCadastroImg/porta.jpg' */


import Keyboard from './../img/cadprod/keyboard.svg'
import Headphone from './../img/cadprod/music-headphones.svg'
import Phone from './../img/cadprod/mobile-phone.svg'
import Notebook from './../img/cadprod/open-laptop-computer.svg'
import Plug from './../img/cadprod/socket.svg'

export default function newform() {
    
    
    return (
        <>
        <HeaderPrivt/>
        <Container>
            
            <Banner>
                <H1>Para começar,<br/>nos diga algumas coisas</H1>
            </Banner>
                <form action="/cadastroproduto" method="POST">
                    
                    <Box>
                        <Title>Oque quer doar?</Title>
                        <div>
                            <ImgTipo src={Phone}/>
                            <ImgTipo src={Notebook}/>
                            <ImgTipo src={Headphone}/>
                            <ImgTipo src={Plug}/>
                            <ImgTipo src={Keyboard}/>
                        </div>

                        <div>
                            <RadioInput type="radio" name="tipo" id="tipo" value="Celular" required/>
                            <RadioInput type="radio" name="tipo" id="tipo" value="Notebook" required/>
                            <RadioInput type="radio" name="tipo" id="tipo" value="Fones" required/>
                            <RadioInput type="radio" name="tipo" id="tipo" value="Cabos" required/>
                            <RadioInput type="radio" name="tipo" id="tipo" value="Gadgets" required/>
                        </div>

                        <ButtonProx>Próximo</ButtonProx>

                    </Box> 
                    
                    <Box>
                        <Title>Qual o estado do seu item?</Title>
                        
                        <div><RangeSlide type="range" min="1" max="5" name="estado" id="estado" required/></div>
                        
                        <ButtonProx>Próximo</ButtonProx>
                    
                    </Box> 

                    <Box>
                        <Title>Mande uma foto do seu item</Title>
                        
                        <div><input type="file" name="fotoProduto" id="fotoProduto" required/></div>
                        
                        <ButtonProx>Próximo</ButtonProx>
                    </Box> 

                    <Box>
                        <Title>insira sua Descrição!</Title>
                        <div>
                            <input type="text" name="nome" id="nome" placeholder="Titulo da doação" required/> 
                            <input type="text" name="caracteristicas" id="caracteristicas" placeholder="caracteristicas" required/>
                            <input type="hidden" name="id" value="15" id="id"  required/>
                            <input type="hidden" name="foto" value="https://quadroecia.com/img/foto.jpeg" id="foto"  required/>  
                        </div> 
                        
                        <ButtonProx>Próximo</ButtonProx>
                    </Box> 

{/*                     <input type="text" name="id" id="id"  placeholder="id"/>id
                    <button type="submit"> submit </button> */}
                </form>
        </Container>
        </>
    )
}

const ButtonProx = styled.button`

    padding:10px 50px;
    margin-bottom: 50px;
    background-image: linear-gradient(to bottom right, rgb(68, 226, 139), rgb(68, 233, 90) );
    color:white;
    font-size:14pt;
    font-weight: bold;

`
const ImgTipo = styled.img`
    height:100px;
    margin: 0px 40px;
`

const RangeSlide = styled.input`

    width:80%;

`

const RadioInput = styled.input`

    height:15px;
    width:15px;
    margin:  10px 85px 90px 85px;
    cursor:pointer;

`

const Title = styled.h1`
    font-size:35pt;
    color: rgba(0,0,0,0.8);
`

const Box = styled.section`
    background:white;
    height:100%;
    width:100%;
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