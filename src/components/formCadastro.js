import React from 'react'
import styled from  'styled-components'

import ImgFundo from './../img/formCadastroImg/imageF.png'
import Iconuser from './../img/formCadastroImg/icons/user.png'
import IconPass from './../img/formCadastroImg/icons/Vector.png'
import IconEmail from './../img/formCadastroImg/icons/iconemail.png'
import IconCel from './../img/formCadastroImg/icons/celicon.png'
import Ilustracao01 from './../img/formCadastroImg/Ilustracao01.png'

export default function form() {
    return (
        <Containner>
            <View>
            <SectionForm>
                <Form>
                    <DivInput>
                        <DivImg>
                            <Img src={Iconuser} weight="" height="25" alt=""/>
                        </DivImg>
                        <Input type="text" name="" id="" placeholder="Nome de Usuário" required/> 
                        <Pform>(5-15 caracteres)</Pform>
                    </DivInput>  
                    
                    <DivInput>
                        <DivImg>
                            <Img src={IconPass} weight="" height="25" alt=""/>
                        </DivImg>
                        <Input type="password" name="" id="" placeholder="Senha" required/>
                        <Pform>(5-15 caracteres)</Pform>
                    </DivInput>  

                    <DivInput> 
                        <DivImg>
                            <Img src={IconPass} weight="" height="25" alt="" />
                        </DivImg>
                        <Input type="password" name="" id="" placeholder="Repetir Senha" required/>
                    </DivInput>

                    <DivInput>
                        <DivImg>
                            <Img src={IconEmail} weight="" height="15" alt=""/>
                        </DivImg>
                        <Input type="email" name="" id="" placeholder="E-mail" required />
                    </DivInput>   

                    <DivInput>
                        <DivImg>
                            <Img src={IconCel} weight="" height="25" alt=""/>
                        </DivImg> 
                        <Input type="tel" name="" id=""placeholder="Celular"/>
                        <Pform>(Opcional)</Pform>     
                    </DivInput>   

                    <Button type="submit">Cadastre-se</Button>
                </Form>

                <ImgPerfil src={Ilustracao01} weight="" height="150" alt=""/>

              </SectionForm>
        </View>
        <ImgF src={ImgFundo} weight="" height="" alt=""/>
        </Containner>
   )

}

const Containner = styled.section`
    background: #51B981;
    display:flex;
`;

const ImgF = styled.img`
max-height:621px;
`;

const View = styled.section`
    background: #51B981;

    display:flex;
    align-items:center;
    justify-content:center;

    width:100%;
    height: 100%;
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
    min-width:665px;
`;

const Form = styled.form`
    display:flex;
    margin-left:40px;
    flex-direction:column;
    align-items:baseline;
    justify-content:center;
    max-width: 450px;  
    padding-top:40px;

    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
    color: #828282;
`;


const Img = styled.img`
`;

const DivInput = styled.div`
display:flex;
margin-top:20px;
margin-left:42px;

`;

const Pform =styled.p`
    
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 15px;
    min-width:100px;
    margin:11px;
`;

const Input = styled.input`
    background-color:#E0E0E0;
    border-radius: 0 50px 50px 0;
    display:block;
    min-width:18rem;
    display:flex;
    flex-direction:column;

    color:black;
    font-weight:bold;
    padding-left:10px;
    
    
`;

const Button = styled.button`
    min-width:21rem;
    min-height:2rem;
    background:#F2C94C;
    background-image: linear-gradient(to right, #F2C94C,#FFA31A);
    margin-left:100px;
    margin-bottom:45px;
    margin-top:80px;
    
    font-weight:bold;
    font-size:17px;
    color: black;


    &:hover {
    transition-duration:0.8s;
    background:#FFB23E;
    /* background: #F2C94C; */ 
  }

`;
const DivImg = styled.div`
    background-color:#F2C94C;
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:4vh;
    width: 38px;
    height:40px;

    border-top-left-radius:10px;
    border-bottom-left-radius:10px;
`;

const ImgPerfil = styled.img`
    margin-right:1.8rem;
`;