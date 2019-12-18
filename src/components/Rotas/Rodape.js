import React from 'react'
import styled from 'styled-components'

export default function Rodape(){
    return(
        <>
            <Container>
               <P>Copyright © 2019 - Ree</P>
            </Container> 
        </>
    )
}

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
