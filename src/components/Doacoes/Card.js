import React from 'react';
import styled from 'styled-components';
import Scroll from './ScrollButton'

export default function Card(){
    return(
        <>
            <CardSection>
            
            
            <H2>Oque quer doar?</H2>
                <Div>
                    <Ul>
                        <Li>
                            <Button>teste</Button>
                        </Li>
                        <Li>
                            <Button>teste</Button>
                        </Li>
                        <Li>
                            <Button>teste</Button>
                        </Li>
                        <Li>
                            <Button>teste</Button>
                        </Li>
                        <Li>
                            <Button>teste</Button>
                        </Li>
                    </Ul>
                </Div>
                <Scroll/>
            </CardSection>
        </>
        )
    }

const Div = styled.div`
display:flex;
justify-content:center;
`

const Ul = styled.ul`
    display:flex;
    margin:10px;
`

const Li = styled.li`
    margin:20px;

`
const Button = styled.button`
border-radius:20px;
background-color:white;
padding:50px;`

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