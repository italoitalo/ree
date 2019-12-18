import React from 'react'
import styled from  'styled-components'
import ImgFundo from './../img/formCadastroImg/imageF.png'
import Iconuser from './../img/formCadastroImg/icons/user.png'
import IconPass from './../img/formCadastroImg/icons/Vector.png'
import IconEmail from './../img/formCadastroImg/icons/iconemail.png'
import IconCel from './../img/formCadastroImg/icons/celicon.png'
import FtPerfil from './../img/formCadastroImg/fotoperfil.png'


export default function form() {
    return (
        <Containner>
            <View>
            <SectionForm>
                <Form>
                    
                        <DivInput>
                            <DivImg>
                                <Img src={Iconuser} weight="22,16" height="27,74" alt=""/>
                            </DivImg>
                            <Input type="text" name="" id=""/> 
                            <Pform>(5-15 caracteres)</Pform>
                        </DivInput>  
                            
                        <DivInput>
                            <DivImg>
                                <Img src={IconPass} weight="22,16" height="30,93" alt=""/>
                            </DivImg>
                            <Input type="text" name="" id=""/>
                            <Pform>(5-15 caracteres)</Pform>
                        </DivInput>  
                        <DivInput> 
                            <DivImg>
                                <Img src={IconPass} weight="22,16" height="30,93" alt=""/>
                            </DivImg>
                            <Input type="text" name="" id=""/>
                        </DivInput>
                        <DivInput>
                            <DivImg>
                                <Img src={IconEmail} weight="23.38" height="17" alt=""/>
                            </DivImg>
                            <Input type="text" name="" id=""/>
                        </DivInput>   
                        <DivInput>
                            <DivImg>
                                <Img src={IconCel} weight="19,33" height="29" alt=""/>
                            </DivImg> 
                            <Input type="text" name="" id=""/>
                        <Pform>(Opcional)</Pform>     
                        </DivInput>   
                        <Button type="submit">Cadastre-se</Button>
                </Form>
                <ImgPerfil src={FtPerfil} weight="189" height="189" alt=""/>
              </SectionForm>
            <ImgF src={ImgFundo} weight="501" height="680" alt=""/>
        </View>
        </Containner>
   )

}

const Containner = styled.section`
    background: #51B981;
    display:flex;
    align-items:center;
    justify-content:center;
    height: 100%;
   
`;
const View = styled.section`
     display:flex;
    align-items:center;
    justify-content:center;
   width:100%;
   /* border: 5px solid #000; */

`;


const SectionForm = styled.section`
    background-color: #F2F2F2;
    display:flex;
    flex-grow:1;
    align-items:center;
    justify-content:space-between;
    margin:60px;
    border-radius:18px; 
    min-width:733.11px;
    
    
`;

const Form = styled.form`
    display:flex;
    margin-left:42px;
    flex-direction:column;
    align-items:baseline;
    justify-content:center;
    max-width: 453px;  
    padding-top:70px;

    font-style: normal;
    font-weight: normal;
    font-size: 17.3411px;
    line-height: 20px;
    color: #828282;
   
`;


const Img = styled.img`
`;

const ImgF = styled.img`
    max-height:654px;
    max-width:500px;
    margin-right:0px;
`;
const DivInput = styled.div`
display:flex;
margin-top:19.89px;
margin-left:42px;

`;

const Pform =styled.p`
    
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 15px;
    color: #999999;
    min-width:109px;
    margin:11.59px;
`;

const Input = styled.input`
    background-color:#E0E0E0;
    border-radius: 0 50px 50px 0;
    display:block;
    min-width:17.9131rem;
    display:flex;
    flex-direction:column;
    
    
`;

const Button = styled.button`
    display:block;
    min-width:21.875rem;
    min-height:2.0625rem;
    background: #F2C94C;
    margin-left:190px;
    margin-bottom:45.7px;
    margin-top:81.89px;


    &:hover {
    transition-duration:0.8s;
    background:#F58B0E;
    /* background: #F2C94C; */ 
  }

`;
const DivImg = styled.div`
    background-color:#F2C94C;
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:4.682232346241458vh;
    width: 38.54px;
    height:40.94px;

`;

const ImgPerfil = styled.img`
    margin-right:1.8194rem;
`;