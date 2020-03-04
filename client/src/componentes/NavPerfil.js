import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

export default function NavPerfil() {
    return ( 
            <section>

                <Nav>
                    <Navigation to="/perfil"><H4>Biografia</H4></Navigation>
                    <Navigation to="/perfil/doacoes"><H4>Doações</H4></Navigation>
                    <Navigation to="/perfil/interesses"><H4>interesses</H4></Navigation>
                    <Navigation to="/perfil/config"><H4>Configurações</H4></Navigation> 
                </Nav>
            
            </section>
    )
}


//FUNDO VERDE CLARO
const Nav = styled.div`
    height:100%;
    width: 220px;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    background-image: linear-gradient(to bottom right, rgb(68, 226, 139), rgb(68, 233, 90) );

    @media (max-width: 768px) {
        display:flex;
        flex-direction:row;
        width: 100%;
        height: 100%;
}
`

const H4 = styled.h4`
    margin: 20px 0;
    text-align: center;

    @media (max-width:765px){
        font-size: 11pt
}
`
//LINK (texto dos botoes)
const Navigation = styled(Link)`padding: 5px;
margin: 10px 0 30px 40px;
border-top-left-radius:5px;
border-bottom-left-radius:5px;
transition: 0.2s;

&:hover {
transition: 0.1s;
background-color: white;
}

@media (max-width:765px){
display:block;
margin: 5px;

&:hover {
border-top-right-radius:5px;
border-bottom-right-radius:5px;
}
}
    text-decoration: none;
    font-size: 25px;
    color: black;
`

