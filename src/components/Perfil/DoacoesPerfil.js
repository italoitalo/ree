import React from 'react'
import styled from  'styled-components';

import NavPerfil from '../Rotas/NavPerfil';
import FeedProdutos from './../TelaUserLogado/FeedProdutos';

export default function Doacoes(){
    return(
        <>
            <Main>  
                <NavPerfil/>
                
                <FeedProdutos />
            </Main>
        </>
    )
}

const Main = styled.section`
display:flex
`