import React from 'react'
import styled from  'styled-components';

import NavPerfil from '../Rotas/NavPerfil';

import Config from '../../img/PerfilBiografia/Config.svg';
import User from '../../img/PerfilBiografia/User.png';

export default function BioPerfil(){
    return(
        <>  
            <Main>
                <NavPerfil/> 
                    <Main>
                        <MainCol>
                            <MainPessoal>
                                <img src={User}></img>
                                <p>Dio Brando</p>
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
                        </MainCol>
                    </Main>
            </Main>
        </>
    )
}

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
width: 500px;
height: 330px;
background-color:rgba(0, 0, 0, 0.1);
border-radius: 17px;
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
`

const MainPessoal = styled.section`
display:flex;
align-items: center;
`

const Main = styled.section`
display:flex
`