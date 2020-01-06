import React from 'react'
import styled from  'styled-components';

import NavPerfil from '../Rotas/NavPerfil';

import Config from '../../img/PerfilBiografia/Config.svg';
import User from '../../img/PerfilBiografia/User.png';
import Mapa from '../../img/PerfilBiografia/Mapa.png';
import Local from '../../img/PerfilBiografia/Local.png';

export default function BioPerfil(){
    return(
        <>  
            <Main>
                <NavPerfil/> 
                    <Main2>
                            <MainCol>
                            <MainPessoal>
                                <img src={User}></img>
                                <MainCol><p>Dio Brando</p>
                                <img src={Config}></img>
                                </MainCol>
                            </MainPessoal>
                            <Card>
                                <H1>Informações Pessoais</H1>
                                <Listra>
                                    <PLi>
                                        Nome completo
                                    </PLi>
                                    <PLi2>                                       
                                        Jonathan Joestar                                        
                                    </PLi2>                                    
                                </Listra>
                                <Listra>
                                    <PLi>
                                    Número de celular
                                    </PLi>
                                    <PLi2>                                       
                                    +55 (21) 1111-2222                                       
                                    </PLi2>                                    
                                </Listra>
                                <Listra>
                                    <PLi>
                                    E-mail
                                    </PLi>
                                    <PLi2>                                       
                                        joao.exemplo@ree.com                                    
                                    </PLi2>                                    
                                </Listra>
                                <Listra>
                                    <PLi>
                                        Nome de usuário
                                    </PLi>
                                    <PLi2>                                       
                                    joao.login                                      
                                    </PLi2>                                    
                                </Listra>
                                <Listra>
                                    <PLi>
                                    Senha
                                    </PLi>
                                    <PLi2>                                       
                                        **********                                      
                                    </PLi2>                                    
                                </Listra>
                                <img src={Config}></img>
                                
                            </Card>
                            <CardMenor>
                                <H1>
                                    Datas
                                </H1>
                                <Listra>
                                    <PLi>
                                    Data de nascimento


                                    </PLi>
                                    <PLi2>                                       
                                    22 de Maio, 1973                                    
                                    </PLi2> 
                                </Listra>
                                <Listra>
                                    <PLi>
                                    Idade
 
                                    </PLi>
                                    <PLi2>                                       
                                        46                                     
                                    </PLi2> 
                                </Listra>
                                <Listra>
                                    <PLi>
                                    Participa desde
                                    </PLi>
                                    <PLi2>                                       
                                    Dezembro de 2019                                     
                                    </PLi2> 
                                </Listra>
                                <img src={Config}></img>
                            </CardMenor>
                            <CardMenor>
                                <H1>
                                    Outros
                                </H1>
                                <Listra>
                                    <PLi>
                                    Cor preferida


                                    </PLi>
                                    <PLi2>                                       
                                        Roxo                                  
                                    </PLi2> 
                                </Listra>
                                <Listra>
                                    <PLi>
                                    Veículo
 
 
                                    </PLi>
                                    <PLi2>                                       
                                                                            
                                    </PLi2> 
                                </Listra>
                                <Listra>
                                    <PLi>
                                    Ocupação
                                    </PLi>
                                    <PLi2>                                       
                                                                        
                                    </PLi2> 
                                </Listra>
                                <img src={Config}></img>
                            </CardMenor>
                            
                        </MainCol>
                        <CardVertical>
                            <img src={Local}></img>
                            <H2>
                                Rio de janeiro - RJ Meier
                            </H2>
                            <Listra2>
                                <PLi>Endereço</PLi>
                                <PLi2>Rua 90, Meier</PLi2>
                            </Listra2>
                            <Listra2>
                                <PLi>CEP</PLi>
                                <PLi2>218774520</PLi2>
                            </Listra2>
                            <Listra2>
                                <PLi>Complemento</PLi>
                                <PLi2>casa 2</PLi2>
                            </Listra2>
                            <img src={Mapa}></img>
                            <img src={Config}></img>
                        </CardVertical>
                    </Main2>
            </Main>
        </>
    )
}


const H2 = styled.h2`
font-family: Catamaran;
font-weight: bold;
font-size: 2em;
line-height: 85%;
color: #F2C94C;
margin: 0 0 15px 0;
`

const Listra2 = styled.ul`
width: 310px;
height: 30px;
border-radius: 20px;

background-color:rgba(0, 0, 0, 0.1);
margin: 0 0 10px 0;
display: flex;
justify-content: space-between;

`

const CardVertical = styled.div`
width: 330px;
height: 720px;

background-color:rgba(0, 0, 0, 0.1);
margin: 0 0 15px 15px;
border-radius: 17px;
display:flex;
flex-direction:column;
align-items: center;
`
const CardMenor = styled.div`
width: 450px;
height: 200px;
background-color:rgba(0, 0, 0, 0.1);
margin: 0 0 15px 0;
border-radius: 17px;

/* flex */
display:flex;
flex-direction: column;
align-items: center;
`

const PLi2 = styled.p`
margin:0 5px 0 0;
font-size:1.25em;
font-weight: bold;
color:rgba(0, 0, 0, 1);
`


const PLi = styled.p`
margin:0 0 0 5px;
font-size:1.25em;
font-weight: bold;
color:rgba(0, 0, 0, 0.4);

`

const Listra = styled.ul`
width: 430px;
height: 30px;
border-radius: 20px;
background-color:rgba(0, 0, 0, 0.1);
margin: 0 0 10px 0;
display: flex;
justify-content: space-between;

`

const Card = styled.div`
width: 450px;
height: 330px;
background-color:rgba(0, 0, 0, 0.1);
border-radius: 17px;
margin: 0 0 15px 0;
/* flex */
display:flex;
flex-direction: column;
align-items: center;
`
const H1 = styled.h1`
font-family: Catamaran;
font-weight: bold;
font-size: 2.5em;
line-height: 85%;
color: #F2C94C;
margin: 0 0 15px 0;
`

const MainCol = styled.section`
display:flex;
flex-direction: column;
align-items: flex-start;
`

const MainPessoal = styled.section`
display:flex;
align-items: center;


`
const Main2 = styled.section`
display:flex;
margin: 10px;

`

const Main = styled.section`
display:flex;


`