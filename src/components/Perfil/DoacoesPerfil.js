import React from 'react'
import styled from  'styled-components';

import NavPerfil from '../Rotas/NavPerfil';


export default function Doacoes(){
    return(
        <>
            <Main>  
                <NavPerfil/>
               <h1>pagina doações</h1>
            </Main>
        </>
    )
}

const Main = styled.section`
display:flex;

`;
