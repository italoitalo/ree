import React from 'react';
import styled from 'styled-components';
import Scroll from './ScrollButton'

import phone from './../../img/PaginaDoacoes/mobile-phone.svg'
import keyboard from './../../img/PaginaDoacoes/keyboard.svg'
import headphone from './../../img/PaginaDoacoes/music-headphones.svg'
import plug from './../../img/PaginaDoacoes/rounded-plug.svg'
import notebook from './../../img/PaginaDoacoes/open-laptop-computer.svg'
export default function Card(){
    return(
        <>
        <Div>
            <CardSection>
            
            <H2>Oque quer doar?</H2>
               
                    <Ul>
                        <Li>
                            <Button><ImgIcon src={phone}/> <h1>Celulares</h1></Button>
                        </Li>
                        <Li>
                            <Button><ImgIcon src={notebook}/><h1>Notebooks</h1></Button>
                        </Li>
                        <Li>
                            <Button><ImgIcon src={headphone}/><h1>Fones</h1></Button>
                        </Li>
                        <Li>
                            <Button><ImgIcon src={plug}/><h1>Cabos</h1></Button>
                        </Li>
                        <Li>
                            <Button><ImgIcon src={keyboard}/><h1>Celulares</h1></Button>
                        </Li>
                    </Ul>
                    <Div>
                        <Scroll/>
                    </Div>
            </CardSection>
        </Div>
        </>
        )
    }

const Div = styled.div`
    display: flex;
    justify-content: center;
`

const ImgIcon = styled.img`
    height:60px;
`

const Ul = styled.ul`
    display:flex;
    margin:10px;
    justify-content:center;
`

const Li = styled.li`
    margin:20px;
`
const Button = styled.button`
    border-radius:20px;
    background-color:white;
    min-width:150px;
    padding:30px;
    &:hover{
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    }
    `

    const H2 = styled.h2`
    font-size: 50px;
    background: -webkit-linear-gradient(yellow,darkorange);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align:center;
    font-weight:900;

`

const CardSection = styled.section`
    margin: -50px 0 200px 0;
    width:75%;
    min-height:300px;
    padding:10px;
    background: whitesmoke;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    `