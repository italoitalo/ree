import React from 'react';
import styled from 'styled-components';



import chat from './../../img/itensCard/chat.svg'
import coment from './../../img/itensCard/comment.svg'
import share from './../../img/itensCard/share.svg'
import like from './../../img/itensCard/like.svg'

/* import UserFoto from './../../img/itensCard/UserFoto.png' */
/* import prodCelu from './../../img/itensCard/prodCelu.jpg' */


export default function Card({card}) {

  
    return ( 
      <> 
             
             <CardSection  className="card-item" >
                
                <DivUserProd >
                
                <User >
                
                <ImgUser src = { card.img_url_user }
                alt = "imagem do usuário" / >
                
                <H1User > { card.username } </H1User> 
                </User> 
                <ImgProd alt = "PRODCEL"
                src = { card.img_url_card }
                /> 
                </DivUserProd> 
                <InfoCard >
                
                <InfoText >
                
                <H1Prod > { card.nome_card } </H1Prod> 
                <PinfoText > { card.caracteristicas } </PinfoText> 
                </InfoText> 
                <AcoesCard >
                
                <SocialButton href = "#" > < img src = { chat }
                alt = "chat"
                height = "20" / > </SocialButton> 
                <SocialButton href = "#" > < img src = { share }
                alt = "chat"
                height = "20" / > </SocialButton> 
                <SocialButtonLike href = "#" > < img src = { like }
                alt = "chat"
                height = "20" / > </SocialButtonLike> 
                <a href="/chat"> 
                <SocialButton href = "#" > < img src = { coment }
                alt = "chat"
                height = "20" / >  </SocialButton>  </a>
                </AcoesCard> 
                </InfoCard> 
                </CardSection>
          </>
    );
}


const SocialButton = styled.button `
  height:20px;
  width:20px;
  margin:10px;
  background:white;
  opacity: 0.4;

  &:hover{
    opacity:1;
  }


`

const SocialButtonLike = styled.button `
  height:20px;
  width:20px;
  margin:10px;
  background:white;
  opacity: 0.4;

  &:hover{
    opacity:1;
  }

  &:focus{
    opacity:1;

  }
`



const AcoesCard = styled.section `
display:flex;
`;

const CardSection = styled.section `
   display:flex;
    /* max-width:600px;
    max-height:300px; */
    flex: 0 1 10%;
    padding:10px;
    background: white;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    margin : 20px 20px;

    transition:0.4s;

    &:hover{
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.4);
      transition: 0.4s;
    }
`;

const ImgProd = styled.img `
margin:15px;
border-radius:10px;

box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  max-width: 100%;
	-moz-transition: all 0.3s;
	-webkit-transition: all 0.3s;
	

transition:all 0.4s;
&:hover{
  /* max-height:220px;
  transition: 0.5s; */
  -moz-transform: scale(1.1);
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
}
`;

const DivUserProd = styled.section `
  overflow:-moz-hidden-unscrollable; 
  display:flex;
  flex-direction:column;
  align-content: center;
  justify-content: flex-start;
`;

const User = styled.div `
display:flex;
margin-left: 10px;
max-width:265px;
background: whitesmoke;
border-radius: 45px;

@media (max-width:765px){
  
}
`;

const ImgUser = styled.img `
width: 80px;
height: 80px;
margin-left:2px;
border-radius: 50%;
`;
const H1User = styled.h1 `
  align-self:center;
  font-weight: bold;
  font-size: 20px;
  margin-left:8px;
`;
const H1Prod = styled.h1 `
  align-self:center;
  font-weight: bold;
  font-size: 20px;
  
`;


const InfoCard = styled.section `
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
margin-left:25px;
`;
const InfoText = styled.div `
  border-radius: 4.55207px;
  max-width:190px;
  padding:10px;
  height:auto;
`;
const PinfoText = styled.p `
    word-wrap:break-word;
    min-height:20px;
    font-family: Catamaran;
    min-width: 160px;
    font-size: 15px;
    color: #000000;
    
`;