import React from 'react'
import styled from 'styled-components'

export default function Card(){
    return(
        <>
            <CardSection>
                <H2>De uma descrição pra sua doação</H2>
              
            </CardSection>
        </>
        )
    }

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