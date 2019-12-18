import React from 'react'
import styled from  'styled-components';

import NavPerfil from '../Rotas/NavPerfil';

export default function BioPerfil(){
    return(
        <>  
            <Main>
                <NavPerfil/> 
                <h1>Ree, Pagina BIOGRAFIA</h1>
            </Main>
        </>
    )
}

const Main = styled.section`
display:flex
`