import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import Card2 from './Card2'
import Card3 from './Card3'

export default function Doacoes(){
    return(
        <>
            <Container>
                
                <Banner>
                        <H1>Para começar,<br/>nos diga algumas coisas</H1>
                </Banner>

                <Card/>
                <Card2/> 
                <Card3/> 
                
            </Container>
        </>
    )
}

const Container = styled.section`
    display:flex;
    flex-direction:column;
`

const Banner = styled.section`
    min-height:250px;
    width:100%;
    background-color:#51B981;
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