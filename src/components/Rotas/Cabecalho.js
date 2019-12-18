import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

export default function Cabecalho(){
    return(
        <>
            <Div>
                <Navigation to="/"><Logo>ree</Logo></Navigation>
            
                <Ul>     
                    <Navigation to="/"><Li>Home</Li></Navigation>
                    <Navigation to="/cadastro"><Li>Cadastro</Li></Navigation>
                    <Navigation to="/perfil"><Li>Perfil</Li></Navigation>
                    <Navigation to="/contato"><Li>Contato</Li></Navigation>
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
    box-shadow: 0px 0px 20px #696969;
    position:relative;
`

const Logo = styled.div`
    font-size: 2rem;
    font-weight: bolder;
    padding-left: 20px;
    color: #51B981;
`

const Li = styled.li`
    padding:20px;
    
    color: black;
    font-weight:bold;

    &:hover{
        color: #51B981;
        background-color:whitesmoke;
    }
`  

const Ul = styled.ul`
display:flex;
width:100% ;
justify-content: space-evenly;
`