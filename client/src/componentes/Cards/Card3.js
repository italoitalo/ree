import React from 'react';
import styled from 'styled-components';


import chat from './../../img/itensCard/chat.svg'
import coment from './../../img/itensCard/comment.svg'
import share from './../../img/itensCard/share.svg'
import like from './../../img/itensCard/like.svg'




import UserFoto from './../../img/itensCard/UserFoto.png'
import cooler from './../../img/itensCard/cooler.jpg'

export default function Card() {
  return (
    <>
      
      <CardSection>
          <DivUserProd>
            <User>
              <ImgUser src={UserFoto} alt="usuário foto"/>
              <H1User>Usuário</H1User>
            </User>
            <ImgProd src={cooler} alt="imagem do produto"/>
          </DivUserProd>
          <InfoCard>
            <InfoText>
              <PinfoText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam turpis libero, tincidunt in euismod a, finibus a metus.</PinfoText>
            </InfoText>
            <AcoesCard>
              <SocialButton href="#"><img src={chat} alt="chat" height="20"/></SocialButton>
              <SocialButton href="#"><img src={share} alt="chat" height="20"/></SocialButton>
              <SocialButton href="#"><img src={like} alt="chat" height="20"/></SocialButton>
              <SocialButton href="#"><img src={coment} alt="chat" height="20"/></SocialButton>
            </AcoesCard>
          </InfoCard>

      </CardSection>

    </>
  );
}

const SocialButton = styled.button`
  height:20px;
  width:20px;
  margin:10px;
  background:white;
  opacity: 0.4;

  &:hover{
    opacity:1;
  }
`
const AcoesCard = styled.section`
display:flex;
`;

const CardSection = styled.section`
   display:flex;
    max-width:700px;
    min-height:260px;
    padding:10px;
    background: white;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    margin : 50px 40px;

    transition:0.4s;

    &:hover{
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.4);
      transition: 0.4s;
    }
`;

const ImgProd = styled.img`
margin:10px;
border-radius:10px;
max-height:200px;
box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);

transition:0.4s;
&:hover{
  max-height:220px;
  transition: 0.5s;
}
`;

const DivUserProd = styled.section`
  display:flex;
  flex-direction:column;
  align-content: center;
  justify-content: flex-start;
`;

const User = styled.div`
display:flex;
margin-left: 10px;
max-width:265px;
background: whitesmoke;
border-radius: 45px;
`;
const ImgUser = styled.img`
margin-left:2px;
`;
const H1User = styled.h1`
  align-self:center;
  font-weight: bold;
  font-size: 20px;
  margin-left:8px;
`;
const InfoCard = styled.section`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
margin-left:25px;
`;
const InfoText = styled.div`
  border-radius: 4.55207px;
  max-width:190px;
  padding:10px;
  height:auto;
`;
const PinfoText = styled.p`
    min-height:20px;
    font-family: Catamaran;
    min-width: 160px;
    font-size: 15px;
    color: #000000;
`



