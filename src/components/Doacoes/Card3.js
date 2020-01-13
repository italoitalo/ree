import React from 'react'
import styled from 'styled-components'
import Scroll from './ScrollButton'

export default function Card(){
    return(
        <>
            <CardSection>
                <H2>De uma descrição pra sua doação</H2>
                <Div>
                <Titulo type='text-area' placeholder ='Titulo da Doação'/>
                <Textarea type='text-area' placeholder='Descreva sua doação'/>
                </Div> 
           </CardSection>
        </>
        )
    }
const Div = styled.div`
justify-content:center;

`

const Titulo = styled.input`
width:70%;
padding:5px;
margin: 5px;
`
const Textarea = styled.input`
height:200px;
width:70%;
padding:5px;
margin: 5px;
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
    display: flex;
    flex-direction:column;
    width:75%;
    min-height:300px;
    padding:10px;
    background: whitesmoke;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 20px;

    margin:50px;
    margin-bottom: 300px;
    `