import React from 'react'
import styled from  'styled-components';

import NavPerfil from '../Rotas/NavPerfil';

export default function ConfigPerfil(){
    return(
        <>
            <Main>
                <NavPerfil/> 
                <h1>Ree, Pagina CONFIGURAÇÕES</h1>
            </Main>
        </>
    )
}

const Main = styled.section`
display:flex
`