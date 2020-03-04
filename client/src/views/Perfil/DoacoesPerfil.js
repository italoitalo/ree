import React from 'react'
import styled from  'styled-components';

import HeaderPrivt from './../../componentes/CabecalhoPrivado'


import NavPerfil from './../../componentes/NavPerfil';

import Star from '../../img/PerfilDoacoes/Star.png';


export default function Doacoes(){
    return(
        <>
        
        <HeaderPrivt/>
            <Main>  
                <NavPerfil/>
                    <Container>

                        <DivFlex>  
                            <div>
                                <H1>O que você ja recebeu</H1>     
                                <DivFlex>
                                   <DivRetangulo> item.1</DivRetangulo>
                                   <DivRetangulo> item.2</DivRetangulo>
                                </DivFlex>         
                            </div>

                            <div>
                                <H1>O que você já doou</H1>    
                                <DivFlex>
                                    <DivRetangulo> item.1</DivRetangulo>
                                    <DivRetangulo> item.2</DivRetangulo>
                                </DivFlex>     
                            </div>
                            
                        </DivFlex>
                        
                        <SectionCol>
                            <DivFlexCenter>
                                <H1>Títulos e conquistas </H1>
                            </DivFlexCenter>

                            <SectionDiplayGrande>
                              
                                <DivEmPe>
                                    <Lista>
                                        <H2>
                                        Doando
                                        </H2>
                                        <SectionDiplay>
                                        <Ulist>
                                            <li>Gente Boa   </li>
                                            <li>Amigável </li>
                                            <li>Bondoso </li>
                                            <li>Generoso </li>                                            
                                            <li>Bem-feitor </li>
                                            <li>Altruísta </li>
                                        </Ulist>
                                        <Ulist>
                                            <li> <img alt="star" src={Star}></img></li>
                                            <li> <img alt="star" src={Star}></img></li>
                                            <li> <img alt="star" src={Star}></img></li>
                                            <li><img alt="star" src={Star}></img></li>                                            
                                            <li><img alt="star" src={Star}></img></li>
                                            <li><img alt="star" src={Star}></img></li>
                                        </Ulist>
                                        </SectionDiplay>
                                    </Lista>
                                </DivEmPe>
                               
                                <DivEmPe>
                                <Lista>
                                        <H2>
                                        Recebendo
                                        </H2>
                                        <SectionDiplay>
                                        <UlistRed>
                                            <li>Sortudo  </li>
                                            <li>Pé-Quente </li>
                                            <li>Apadrinhado </li>
                                            <li>Favorito </li>                                            
                                            <li>Queridinho </li>
                                        </UlistRed>
                                        <Ulist>
                                            <li> <img alt="star" src={Star}></img></li>
                                            <li> <img alt="star" src={Star}></img></li>
                                            <li> <img alt="star" src={Star}></img></li>
                                            <li><img alt="star" src={Star}></img></li>                                            
                                            <li><img alt="star" src={Star}></img></li>
                                        </Ulist>
                                        </SectionDiplay>
                                    </Lista> 
                                    </DivEmPe>
                            </SectionDiplayGrande>
                            
                            
                            
                        
                        </SectionCol>
                    </Container>               
            </Main>
        </>
    )
}

const SectionDiplayGrande = styled.section`
justify-content: space-between;
display: flex;
padding: 50px 0px 0px 0px;

@media (max-width:765px){
    
    display: block;
    padding: 0;
    margin:30px 0;
}
`

const UlistRed = styled.ul`
    padding: 0px 15px 0px 0px;
    background: -webkit-linear-gradient(#F14242, #FFE600);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
    font-size:16pt;
    `


const Ulist = styled.ul`
    padding: 0px 15px 0px 0px;
    background: -webkit-linear-gradient(#1AFBC5, #E02FEF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
    font-size:16pt;
    `

const H2 = styled.h2`
    color: rgba(0,0,0,0.7);
    font-size:20pt;
    margin: -40px 0px 0px 0px;
`

const Lista = styled.ul`
display:flex;
flex-direction: column;
align-items: center;

`

const SectionDiplay = styled.section`
justify-content: space-between;
display: flex;
`

const DivEmPe = styled.div`
width: 100%;
height: 100%;
margin: 0px 90px 0px 90px;
border-radius: 8px;
background-color:white;
box-shadow: 0 0 30px 0px rgba(0, 0, 0, 0.1);

@media (max-width:765px){
    height:100%;
    margin: 50px 0;
}
`

const SectionCol = styled.section`
display:flex;
flex-direction: column;
width:100%;
max-width: 1366px;`

const DivFlexCenter = styled.div`
padding: 10px 0px 0px 0px;
display:flex;
align-content: center;
justify-content: center;
width:100%;
max-width: 1366px;
`

const DivRetangulo = styled.div`
/* tamanho */
margin: 10px 5px 0px 0px;
width: 120px;
height: 100px;
/* fonte */
background-color:white;
box-shadow: 0 0 30px 0px rgba(0, 0, 0, 0.1);
border-radius: 8px;
display: flex;
color:rgba(0, 0, 0, 0.2);
justify-content: center;
align-items: center;
font-family: Catamaran;
font-size: 2em;

`

const DivFlex = styled.div`
display:flex;
justify-content:space-evenly;
width:100%; 
@media (max-width:765px){
    flex-direction:column;
    margin: 10px 0;
}

`

const H1 = styled.h1`
font-family: Catamaran;
font-weight: bold;
font-size: 20pt;
line-height: 85%;
color: rgba(0,0,0,0.7);

`
const Container = styled.section `
    width:100%;
    max-width:1366px;
    display:flex;
    padding:20px;
    flex-wrap: wrap
`

const Main = styled.section`
display:flex;
@media (max-width:765px){
    display:block;
}
`;
