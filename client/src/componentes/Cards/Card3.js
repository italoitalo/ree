import React from 'react';
import styled from 'styled-components';



import check from './../../img/itensCard/check.svg'
import cross from './../../img/itensCard/cross.svg'
import pencil from './../../img/itensCard/pencil.svg'
import restore from './../../img/itensCard/left-arrow-1.svg'

import icon from './../../img/TelaLogin/UserPerfil.png'
import cooler1 from './../../img/itensCard/cooler.jpg'
// import cooler2 from './../../img/itensCard/cooler.png'
// import phone from './../../img/itensCard/prodCelu.jpg'

/* import UserFoto from './../../img/itensCard/UserFoto.png' */
/* import prodCelu from './../../img/itensCard/prodCelu.jpg' */

function Delete(){
    var del = document.getElementById("card");
      del.style.opacity = 0.3;
      document.getElementById("aviso").style="display:inherit";
}
function Doado(){
    var check = document.getElementById("card");
      check.style.opacity = 0.3;
      document.getElementById("doado").style="display:inherit";
}

function Restore(){
    var del = document.getElementById("card");
      del.style.opacity = 1;
      document.getElementById("aviso").style="display:none";
      document.getElementById("doado").style="display:none";
  }

function Edit(){
  var editarnome = prompt("Alterar nome do Anúncio")
  var editardescrição = prompt("Alterar a descrição do Anúncio")
  document.getElementById("nome").innerHTML = editarnome;
  document.getElementById("descrição").innerHTML = editardescrição;
}


export default function Card({card}) {
  
    return ( 
      <> 
             
             <CardSection id="card">

                <InfoText style={{display:'none'}} id="aviso">
                  <H1User >Produto Removido</H1User>
                </InfoText>
                <InfoText style={{display:'none'}} id="doado">
                  <H1User >Produto Doado!</H1User>
                </InfoText>

                <DivUserProd >
                  <User >
                    <ImgUser src = {icon} alt = "imagem do usuário" / >
                    
                    <H1User > João  </H1User> 
                  </User> 

                  <ImgProd alt = "PRODCEL" src ={cooler1}/> 
                </DivUserProd> 
                <InfoCard >
                
                <InfoText >
                  <H1Prod id='nome' > Coller pouco usado. </H1Prod> 
                  <PinfoText id='descrição'> Cooler FAN C3Tech Storm 8cm 3 Pinos F7 MB10BK, doando pq comprei um melhor.</PinfoText> 
                </InfoText> 

                <AcoesCard >
                  <SocialButton onClick={Doado} href = "#" > < img src = { check } alt = "check" height = "20" title="Item Doado"/></SocialButton> 
                  <SocialButton onClick={Edit} href = "#" > < img src = { pencil } alt = "edit" height = "20" title="Editar Publicação"/ > </SocialButton> 
                  <SocialButton onClick={Delete} href = "#" > < img src = { cross }alt = "delete" height = "20" title="Deletar Publicação"/ ></SocialButton>
                  <SocialButton onClick={Restore} href = "#" > < img src = { restore }alt = "restore" height = "20" title="Restaurar Publicação"/ > </SocialButton>

                </AcoesCard> 
                </InfoCard> 
                </CardSection>
          </>
    )
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

  @media(max-width:765px){
    height:20px;
    width:20px;
    margin:8px;
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
  -moz-transform: scale(1.1);
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
}

@media(max-width:765px){
  margin:3px 0px;
  max-width:100px;
  
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
`;

const ImgUser = styled.img `
width: 80px;
height: 80px;
margin-left:2px;
border-radius: 50%;

@media (max-width:765px){
  width:40px;
  height: 40px;
}
`;


const H1User = styled.h1 `
  align-self:center;
  font-weight: bold;
  font-size: 20px;
  margin-left:8px;
  
  @media (max-width:765px){
  font-size: 13pt;
}
`;
const H1Prod = styled.h1 `
  align-self:center;
  font-weight: bold;
  font-size: 20px;

  @media (max-width:765px){
    font-size: 12pt;
    width:100%;

  }
`;


const InfoCard = styled.section `
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
margin-left:25px;
`;
const InfoText = styled.div `
  max-width:190px;
  padding:10px;
  height:auto;
  
  @media(max-width:765px){
    padding:0;
  }
`;
const PinfoText = styled.p `
    word-wrap:break-word;
    min-height:20px;
    font-family: Catamaran;
    min-width: 160px;
    font-size: 10pt;
    color: #000000;
    
`;