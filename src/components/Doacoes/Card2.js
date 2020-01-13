import React from 'react'
import styled from 'styled-components'

export default function Card(){
    return(
        <>
            <CardSection>
                <H2>Qual o estado do seu item?</H2>
                <Div>
                <H3>Péssimo</H3> 
                <H3>Ruim</H3> 
                <H3>Bom</H3> 
                <H3>Otimo</H3> 
                <H3>Perfeito</H3>
                </Div>
                <Slide type="range" min="1" max="5"/>
                
            </CardSection>
        </>
        )
    }
const Slide = styled.input`
    -webkit-appearance: none;
    width: 80%;
    height: 5px;
    border-radius: 20px;  
    background: #d3d3d3;

    margin-left:10%;
    
    &:hover{
        background: #d3d3e5;
    }

  &::-webkit-slider-thumb{
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 15px;
    background: #4CAd90;
    box-shadow: 0px 0px 8px grey;
    cursor: pointer;

    &:hover{
        background: #4CAF50;
    }
    
  }
`
const Div = styled.div`
display: flex;
justify-content: center;
margin-top:30px;

`
const H3 = styled.h3`
    text-align: center;
    margin-left:7.5%;
    margin-right:7.5%;
    background: -webkit-linear-gradient(green,darkgreen);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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
    width:75%;
    min-height:300px;
    padding:10px;
    background: whitesmoke;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 20px;

    margin:50px;
    margin-top:-90px;
    margin-bottom: 300px;
    `