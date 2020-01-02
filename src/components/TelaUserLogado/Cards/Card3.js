import React from 'react';
import styled from 'styled-components';
import cooler from './../../../img/itensCard/cooler.png'





export default function Card3() {
  return (
    
    <>
      <CardSection>
          <DivUserProd>
            <ImgProd src={cooler} alt=""/>
          </DivUserProd>
            <InfoText>
              <PinfoText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam turpis libero, tincidunt in euismod a, finibus a metus.</PinfoText>
            </InfoText>
      </CardSection>
    </>
  )
}

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

const ImgProd = styled.img`
  
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
    
    font-family: Catamaran;
    font-style: normal;
    font-weight: 500;
    font-size: 18.2083px;
    line-height: 30px;
    color: #000000;
`;


