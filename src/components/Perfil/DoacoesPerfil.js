import React from 'react'
import styled from  'styled-components';

import NavPerfil from '../Rotas/NavPerfil';
import FeedProdutos from './../TelaUserLogado/FeedProdutos';

export default function Doacoes(){
    return(
        <>
            <Main>  
                <NavPerfil/>
                <ConteudoDireita>
                    <FeedProdutos />
                </ConteudoDireita>
               
            </Main>
        </>
    )
}

const Main = styled.section`
display:flex;

`;
const ConteudoDireita = styled.section`
display:flex;
flex-direction:column;
align-items:flex-start;
`;

