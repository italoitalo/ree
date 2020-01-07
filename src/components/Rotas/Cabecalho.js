import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import ree from './../../img/ree.svg'

export default function Cabecalho(){
    return(
        <>
            <Div>
                <Navigation to="/"><Logo src={ree} height='40' /></Navigation>
            
                <Ul>     
                    <Navigation to="/"><Li>Home</Li></Navigation>
                    <Navigation to="/contato"><Li>Contato</Li></Navigation>
                    <Navigation to="/cadastro"><Li>Cadastro</Li></Navigation>
                    <Navigation to="/login"><Li>Login</Li></Navigation>
                    <Navigation to="/perfil"><Li>Perfil</Li></Navigation>
                </Ul>
            </Div>
        </>
    )
}
const Navigation = styled(Link)`
text-decoration:none;
`

const Div= styled.div`
    display:flex;
    background-color: whitesmoke;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
    position:relative;
`

const Logo = styled.img`
    
    padding-left:20px;
    padding-top:10px;
`

const Li = styled.li`
    padding:5px;
    margin-top:10px;
    margin-right:20px;
    color: black;
    font-family: 'Merriweather Sans', sans-serif;
    font-size: 14px;

    &:hover{
        color: #51B981;
        background-color:whitesmoke;
    }
`  

const Ul = styled.ul`
display:flex;
width:100% ;
justify-content: flex-end;
`