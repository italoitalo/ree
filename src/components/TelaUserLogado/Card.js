import React from 'react';
import styled from 'styled-components';


import chat from './../../img/itensCard/chat.png'
import coment from './../../img/itensCard/coment.png'
import prodCelu from './../../img/itensCard/prodCelu.png'
import share from './../../img/itensCard/share.png'
import like from './../../img/itensCard/like.png'
import UserFoto from './../../img/itensCard/UserFoto.png'




export default function Card() {
  return (
    <>
      <h1>CARD</h1>
      <CardSection>
          <User>
            <ImgUser src={UserFoto} alt=""/>
            <H1User>user.1</H1User>
          </User>
          <ImgProd src={prodCelu} alt=""/>
          <InfoCard>
            <InfoText>
              <PinfoText>Smartphone antigo funciona perfeitamente!</PinfoText>
            </InfoText>
            <AcoesCard>
              <ImgAcao src={chat} alt=""/>
              <ImgAcao src={coment} alt=""/>
              <ImgAcao src={like} alt=""/>
              <ImgAcao src={share} alt=""/>
            </AcoesCard>
          </InfoCard>

      </CardSection>

    </>
  );
}

const CardSection = styled.section`
    max-width:534px;
    max-height:260px;
    padding:5px;



    background: #EFEFEF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
`;

const User = styled.div`
display:flex;
align-items:center;
justify-content:start;
margin-left: 10px;
max-width:265px;


background: #FFFFFF;
border-radius: 45.5207px;
`;
const ImgUser = styled.img`

`;
const H1User = styled.h1`

`;
const ImgProd = styled.img`

`;
const InfoCard = styled.section`

`;
const InfoText = styled.div`

`;
const PinfoText = styled.p`

`;
const AcoesCard = styled.section`

`;
const ImgAcao = styled.img`

`;
