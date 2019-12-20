import React from 'react';
import styled from 'styled-components';
import DoacoesPublicas from './TelaUserLogado/DoacoesPublicas';
import SuasDoacoes from './TelaUserLogado/SuasDoacoes'



export default function Home(){
    return(
        <>
            <Container>
                <DoacoesPublicas />
               
            </Container>
        </>
    )
}



const Container = styled.section`
        display:flex;
        
        justify-content:center;
        align-items:center;
`;

