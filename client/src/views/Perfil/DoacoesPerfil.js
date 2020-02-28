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
                            <H1>O que você ja recebeu</H1>
                            <SectionLine>
                            <DivRetangulo> item.1</DivRetangulo>
                            <DivRetangulo> item.2</DivRetangulo>
                            <DivRetangulo> item 3</DivRetangulo>
                            </SectionLine>
                        </DivFlex>
                        <DivFlex>
                            <H1>O que você já doou</H1>
                            <DivRetangulo> item.1</DivRetangulo>
                            <DivRetangulo> item.2</DivRetangulo>
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
                                    </Lista> </DivEmPe>
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
padding: 50px 0px 0px 0px;`

const UlistRed = styled.ul`
padding: 0px 15px 0px 0px;
background: -webkit-linear-gradient(#F14242, #FFE600);
-webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  font-size:1.5em`


const Ulist = styled.ul`
padding: 0px 15px 0px 0px;
background: -webkit-linear-gradient(#1AFBC5, #E02FEF);
-webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  font-size:1.5em`

const H2 = styled.h2`
font-size:2em;
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
width: 266px;
height: 349px;
margin: 0px 90px 0px 90px;
border-radius: 20px;
background-color:rgba(0, 0, 0, 0.1);`

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

const SectionLine = styled.div`
display:flex;
max-width: 500px;
flex-wrap: wrap;

`

const DivRetangulo = styled.div`
/* tamanho */
margin: 20px 5px 0px 0px;
width: 180px;
height: 120px;
/* fonte */
background-color:rgba(0, 0, 0, 0.1);
border-radius: 20px;
display: flex;
color:rgba(0, 0, 0, 0.2);
justify-content: center;
align-items: center;
font-family: Catamaran;
font-size: 2em;

`

const DivFlex = styled.div`
display:flex;
align-content: flex-start;
flex-direction: column;


`

const H1 = styled.h1`
font-family: Catamaran;
font-weight: bold;
font-size: 2.5em;
line-height: 85%;
color: #F2C94C;

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
