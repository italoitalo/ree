import React from 'react'
import styled from 'styled-components'

export default function Rodape(){
    return(
        <>
            <Container>
               <P>
                Copyright © 2019 - Ree<br/>
                <A target = "_blank" href="https://www.instagram.com/equiperee/">Instagram</A>
                <A target = "_blank" href="https://twitter.com/equiperee">Twitter</A>
                <A href="/contato">Contato</A>
               </P>
               
            </Container> 
        </>
    )
}
const A = styled.a`
    color: darkgray;
    margin: 5px 20px;
`

const Container = styled.section`
    background-color:whitesmoke;
    min-height: 100px;
    justify-content: center;
    align-content:center;  
    `
const P = styled.p`
    text-align:center;
    padding-top: 35px;
    color: darkgray;
    `
