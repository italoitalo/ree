import React from 'react';
import styled from 'styled-components';
import FeedProdutos from './TelaUserLogado/DoacoesPublicas';



export default function Home(){
    return(
        <>
            <Container>
                <FeedProdutos />
            </Container>
        </>
    )
}



const Container = styled.section`
        display:flex;
        
        justify-content:center;
        align-items:center;
`;

