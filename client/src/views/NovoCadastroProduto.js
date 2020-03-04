import React from 'react'
import styled from  'styled-components'

import HeaderPrivt from './../componentes/CabecalhoPrivado'
/* import Porta from './../img/formCadastroImg/porta.jpg' */


import Keyboard from './../img/cadprod/keyboard.svg'
import Headphone from './../img/cadprod/music-headphones.svg'
import Phone from './../img/cadprod/mobile-phone.svg'
import Notebook from './../img/cadprod/open-laptop-computer.svg'
import Plug from './../img/cadprod/socket.svg'
import Outros from './../img/cadprod/archive-black-box.svg'

import ScrollIntoView from 'react-scroll-into-view'

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
                        <Title>O deseja doar?</Title>

                        <List>
                            <div>   
                                <Tooltip><Tip>Aparelhos, Telas, Peças internas, Capas, <br/>Etc.</Tip></Tooltip>   
                                <h1>Celulares</h1>
                                <ImgTipo src={Phone}/>      
                            </div>

                            <div>   
                                <Tooltip><Tip>Aparelhos, Telas, Peças internas, Peças externas,<br/>Etc.</Tip></Tooltip>
                                <h1>Notebooks</h1>
                                <ImgTipo src={Notebook}/>   
                            </div>

                            <div>   
                                <Tooltip><Tip>Fones, Headsets, Headphones, <br/>Etc.</Tip></Tooltip>
                                <h1>Headphones</h1>
                                <ImgTipo src={Headphone}/>  
                            </div> 

                            <div>   
                                <Tooltip><Tip>Carregadores, Hdmi, Usb, Entrada de som, <br/>Etc.</Tip></Tooltip>
                                <h1>Cabos</h1>
                                <ImgTipo src={Plug}/>       
                            </div> 

                            <div>   
                                <Tooltip><Tip>Mouse, Teclado, Caixas de Som, <br/>Etc.</Tip></Tooltip>
                                <h1>Periféficos</h1>
                                <ImgTipo src={Keyboard}/>   
                            </div>   

                            <div>   
                                <Tooltip><Tip>Itens não encontrados na lista</Tip></Tooltip>
                                <h1>Outros</h1>
                                <ImgTipo src={Outros}/>     
                            </div>   

                        </List>

                        <div>
                            <RadioInput type="radio" name="tipo" id="tipo" value="Celular" required/>
                            <RadioInput type="radio" name="tipo" id="tipo" value="Notebook" required/>
                            <RadioInput type="radio" name="tipo" id="tipo" value="Fones" required/>
                            <RadioInput type="radio" name="tipo" id="tipo" value="Cabos" required/>
                            <RadioInput type="radio" name="tipo" id="tipo" value="Gadgets" required/>
                            <RadioInput type="radio" name="tipo" id="tipo" value="Outros" required/>
                        </div>
                        
                        <Scroll selector="#estado-box" alignToTop={false}>
                            <ButtonProx>Próximo</ButtonProx>
                        </Scroll>

                    </Box> 

                    <Ponto id="estado-box"></Ponto>

                    <Box>
                        <Title>Qual o estado do seu item?</Title>
                        <Estado>
                            <H2>Pessimo</H2>
                            <H2>Ruim</H2>
                            <H2>Usado</H2>
                            <H2>Bom</H2>
                            <H2>Perfeito</H2>
                        </Estado>
                        <div><RangeSlide type="range" min="1" max="5" defaultValue="3" name="estado" id="estado" required/></div>
                        
                        <Scroll selector="#fotoproduto-box">
                        <ButtonProx>Próximo</ButtonProx>
                        </Scroll>
                    
                    </Box> 

                    <Ponto id="fotoproduto-box"></Ponto>

                    <Box>
                        <Title>Envie uma foto do seu item:</Title>
                        
                        <div><InputImg type="file" name="fotoProduto" id="fotoProduto" required/></div>
                        
                        <Scroll selector="#nome-box">
                        <ButtonProx>Próximo</ButtonProx>
                        </Scroll>
                    </Box> 

                    <Ponto id="nome-box"></Ponto>
                    
                    <Box>
                        <Title>Insira sua descrição:</Title>
                        <div>
                            <Titulo type="text" name="nome" id="nome" placeholder="Titulo da doação" required/> 
                        </div> 
                        <div>
                            <TextArea name="caracteristicas" id="caracteristicas" placeholder="Caracteristicas" required/>
                        </div>
                            <input type="hidden" name="id" value="15" id="id"  required/>
                            <input type="hidden" name="foto" value="https://quadroecia.com/img/foto.jpeg" id="foto"  required/>  
                        
                        <ButtonFinal>Finalizar</ButtonFinal>
                    </Box> 

{/*                     <input type="text" name="id" id="id"  placeholder="id"/>id
                    <button type="submit"> submit </button> */}
                </form>
        </Container>
        </>
    )
}
const Scroll = styled(ScrollIntoView)`
margin:50px;

`
const Ponto = styled.div`
position:absolute;
justify-self:center;
margin: -200px;
height: 2px;
`

const Titulo = styled.input`
    padding:20px;
    font-size:14pt;
`

const TextArea = styled.textarea`
    height: 150px;
    width: 300px;
    font-size: 14pt;
    font-weight:500;
    padding:10px 28px;

    &::placeholder{
        font-size:14pt;
        font-weight:800;
    }
`


const InputImg = styled.input`

    &::-webkit-file-upload-button{
        padding:20px 40px;
        border-radius: 3px;
        border:none;
        outline:none;
        font-size:12pt;
        font-family: 'catamaran' sans-serif;
        font-weight:600;
        background-image: linear-gradient(to bottom right, rgb(68, 226, 139), rgb(68, 233, 90) );
        color: rgba(0,0,0,0.7);
        cursor:pointer;
        color:white;
        transition: 0.2s;

        &:hover{
            box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1)
        }
    }

    &:hover{
      
    border-radius: 0px;
    background:none;
    transition:0.3s;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }
`

const Tip = styled.h1`
    display:flex;
    flex-direction: column;
    text-align:center;
    justify-content:center;
    background-color:whitesmoke;
    box-shadow: 0px 2px 5px 0px rgba( 0,0,0,0.1);
    color: grey;
    font-weight:400;
    font-size: 12pt;
    border-radius:3px;
    margin: -20px 0px;
    height:100px;
`

const Tooltip = styled.div`
    z-index:0;
    margin:-100px 10px;
    height:250px;
    width: 140px;
    /* background-color:green; */
    position: absolute;
    text-align:center;
    opacity:0;
    transition:0.2s;
    
    &:hover{
        cursor:pointer;
        transition:0.1s;
        opacity:1;
    }
`

const List = styled.div`
    display:flex;
`

const H2 = styled.h1`
    margin: 0 7%;
`

const Estado = styled.div`
display:flex;
justify-content:center;
cursor:default;

`
const ButtonProx = styled.a`
    padding:10px 50px;
    border-radius:5px;
    background-image: linear-gradient(to bottom right, rgb(48, 206, 119), rgb(48, 213, 70) );    
    color:white;
    font-size:14pt;
    font-weight: bold;
`
const ButtonFinal = styled.button`
    padding:10px 50px;
    margin: 25px 50px;
    background-image: linear-gradient(to bottom right, rgb(48, 206, 119), rgb(48, 213, 70) );    
    color:white;
    font-size:14pt;
    font-weight: bold;
`
const ImgTipo = styled.img`
    height:80px;
    margin: 0 40px;
    z-index:100;
`

const RangeSlide = styled.input`
    width:80%;
    height: 5px;
    margin: 30px 0;
    -webkit-appearance: none;
    background: whitesmoke;
    box-shadow: none;
    outline: none;
    border: none;

    &::-webkit-slider-thumb{
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        border-radius:100%;
        background: #4CAF50;
        cursor: pointer;
    }
`

const RadioInput = styled.input`
    z-index:130;
    position: relative;
    height:25px;
    width:25px;
    margin: 0 7%; 
    cursor:pointer;
    
`

const Title = styled.h1`
    cursor:default;
    margin-bottom:50px;
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
    cursor:default;
    font-size:70px;
    color: whitesmoke;
    margin-top:25px;
    margin-left:160px;
    font-weight:900;
    line-height: 0.9;
`