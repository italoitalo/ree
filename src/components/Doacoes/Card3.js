import React from 'react'
import styled from 'styled-components'
import Scroll from './ScrollButton'

export default function Card(){
    return(
        <>
        <Div>
            <CardSection>
                <H2>De uma descrição pra sua doação</H2>
               
                <Titulo type='text-area' placeholder ='Titulo da Doação'/>
                <Textarea name="Suas dúvidas" id="textarea" cols="30" rows="10" placeholder="Suas dúvidas"></Textarea>            
           </CardSection>
        </Div>
        </>
        )
    }
    
const Div = styled.div`
    display: flex;
    justify-content: center;
`

const Titulo = styled.input`
    display:flex;
    margin:15px 40px 15px 40px;
    padding:10px;
    background: whitesmoke;


    font-family: Catamaran;
    font-weight: bold;
    font-size: 16px;

    &:hover{
        background:white;
        transition:0.3s;
        
        border-top-right-radius:5px;
        border-bottom-right-radius:5px;
    }
    &:focus{
        background:white;
        transition:0.5s;
        border-top-right-radius:30px;
        border-bottom-right-radius:30px;
    }

::-webkit-input-placeholder{
    color: #BBBBBB;
    font-weight: bold;
}
`
const Textarea = styled.input`
    min-height:150px;
    margin:10px;
    padding: 10px;
    background: whitesmoke;

    font-weight: bold;
    color:#51B981;
    margin:15px 40px 15px 40px;
    font-size: 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);

    &:hover{
        background:white;
        transition:0.3s;
        
        border-radius:5px;
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