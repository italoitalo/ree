import React from 'react';
import styled from 'styled-components';

import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function Cabecalho(){
    return(
        <nav>
            <Ul>
                    <Navigation to="/"><Li>Home</Li></Navigation>
                    <Navigation to="/cadastro"><Li>Cadastro</Li></Navigation>
                    <Navigation to="/perfil"><Li>Perfil</Li></Navigation>
                    <Navigation to="/contato"><Li>Contato</Li></Navigation>
            </Ul>
        </nav>
    )
}
const Navigation = styled(Link)`
text-decoration:none;
`

const Li = styled.li`

padding:10px;
color: black;
font-weight:bold;
text-decoration:none;

&:hover{
    color: green;
}
`

const Ul = styled.ul`
display:flex;
background-color: whitesmoke;
`