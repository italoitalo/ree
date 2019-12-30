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
        {/* <MidiaSection> */}
            <SectionGrid>
                <CardSection>
                    <DivUserProd>
                        <User>
                        <ImgUser src={UserFoto} alt=""/>
                        <H1User>user.2</H1User>
                        </User>
                        <ImgProd src={prodCelu} alt=""/>
                    </DivUserProd>
                    <InfoCard>
                        <InfoText>
                        <PinfoText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam turpis libero, tincidunt in euismod a, finibus a metus. Aenean vitae tempus erat. Ut mauris sem, tristique sit amet leo et, posuere rhoncus orci. Vestibulum ac diam pretium, ultrices risus vitae, hendrerit lorem. Curabitur nulla nisl, porttitor id commodo nec, dapibus at urna.</PinfoText>
                        </InfoText>
                        <AcoesCard>
                        <ImgAcao src={chat} alt=""/>
                        <ImgAcao src={coment} alt=""/>
                        <ImgAcao src={like} alt=""/>
                        <ImgAcao src={share} alt=""/>
                        </AcoesCard>
                    </InfoCard>
                </CardSection>
            </SectionGrid>
        {/* </MidiaSection> */}
    

    </>
  );
}
const SectionGrid = styled.section`
      display:grid;
      grid-row: span 2;


`;
const CardSection = styled.section`
 
    display:flex;
    max-width:534px;
    min-height:260px;
    padding:10px;
    padding-right:28px;
    background: #EFEFEF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    margin : 0 40px;
    margin-top:50px;

   
    
     
 
`;
const DivUserProd = styled.section`
  display:flex;
  flex-direction:column;
  align-content: center;
  justify-content: flex-start;
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
margin-left:2px;
`;
const H1User = styled.h1`
  font-family: Catamaran;
  font-style: normal;
  font-weight: bold;
  font-size: 31.8645px;
  line-height: 52px;
  text-align: center;

  color: #000000;
  margin-left:8px;
`;
const ImgProd = styled.img`
  
`;
const InfoCard = styled.section`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
margin-left:25px;
`;
const InfoText = styled.div`
    
    background: #FFFFFF;
    border-radius: 4.55207px;
    max-width:190px;
    padding:12px;
    height:auto;
`;
const PinfoText = styled.p`
    display:flex;
    flex-wrap:wrap;
    word-wrap: break-word;
    font-family: Catamaran;
    font-style: normal;
    font-weight: 500;
    font-size: 18.2083px;
    line-height: 30px;
    color: #000000;
`;
const AcoesCard = styled.section`
display:inline-flex;
justify-content: space-between;
align-items:center;
max-width:190px;

`;
const ImgAcao = styled.img`
padding:0px 10px;
`;
// const MidiaSection = styled.section`

// @media (max-width:500px ${CardSection})  {
// background:red;

// }

// `;
    