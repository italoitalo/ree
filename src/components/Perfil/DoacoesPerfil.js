import React from 'react'
import styled from  'styled-components';

import NavPerfil from '../Rotas/NavPerfil';

export default function Doacoes(){
    return(
        <>
            <Main>  
                <NavPerfil/>
                <h1>Ree, Pagina DOAÇÕES</h1>
            </Main>
        </>
    )
}

const Main = styled.section`
display:flex
`