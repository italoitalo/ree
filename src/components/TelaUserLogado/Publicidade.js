import React from 'react';
import ImgPubli from '../../img/PaginaDoacoes/bannerPropaganda.png';
import styled from 'styled-components';

export default function Publicidade() {
    return (
        <>
        <Div>
        <Propaganda src={ImgPubli} alt="Publicidade" />
        </Div>
        
        </>
    )
}


const Div=styled.div`
    display:flex;
    justify-content:center;    
    width:100%;
`;

const Propaganda=styled.img`

`;