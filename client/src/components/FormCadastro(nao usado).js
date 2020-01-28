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
                <Form action="/home/suasdoacoes" method="POST">
                    <DivInput>
                        <DivImg>
                            <Img alt="iconuser" src={Iconuser} weight="" height="25" alt=""/>
                        </DivImg>
                        <Input type="text" name="nome" id="" placeholder="Nome de Usuário" required/> 
                        <Pform>(5-15 caracteres)</Pform>
                    </DivInput>  
                    
                    <DivInput>
                        <DivImg>
                            <Img alt="iconpassw" src={IconPass} weight="" height="25" alt=""/>
                        </DivImg>
                        <Input type="password" name="password" id="" placeholder="Senha" required/>
                        <Pform>(5-15 caracteres)</Pform>
                    </DivInput>  

                    <DivInput> 
                        <DivImg>
                            <Img alt="iconpassw" src={IconPass} weight="" height="25" alt="" />
                        </DivImg>
                        <Input type="password" name="" id="" placeholder="Repetir Senha" required/>
                    </DivInput>

                    <DivInput>
                        <DivImg>
                            <Img alt="iconemail" src={IconEmail} weight="" height="15" alt=""/>
                        </DivImg>
                        <Input type="email" name="email" id="" placeholder="E-mail" required />
                    </DivInput>   

                    <DivInput>
                        <DivImg>
                            <Img alt="iconcel" src={IconCel} weight="" height="25" alt=""/>
                        </DivImg> 
                        <Input type="tel" name="celular" id=""placeholder="Celular"/>
                        <Pform>(Opcional)</Pform>     
                    </DivInput>   

                    <Button type="submit">Cadastre-se</Button>
                </Form>

                <ImgPerfil alt="iconIlustracao"src={Ilustracao01} weight="" height="200" alt=""/>

              </SectionForm>
        </View>
        <ImgF  alt="imagem de fundo"src={ImgFundo} weight="" height="" alt=""/>
        </Containner>
   )
}

const Containner = styled.section`
    background: #51B981;
    display:flex;
`;

const ImgF = styled.img`
    height:630px;
    @media(min-width: 360) {
        max-height:900px;
        }
`;

const View = styled.section`
    background: #51B981;
    display:flex;
    align-items:flex-start;
    justify-content:center;
    margin: 30px -10px 0 0;
    width:100%;
    min-height: 85vh;
    
    @media(min-width: 768px) {
        min-height: 85vh;
  }
`;

const SectionForm = styled.section`
    background-color: #F2F2F2;
    display:flex;
    flex-grow:2;
    flex-flow: row wrap;
    flex: 0 1 90%;
    align-items:center;
    justify-content:space-between;

    margin:0;
    border-radius:18px; 
    min-width:665px;
    max-width:1100px;
`;

const Form = styled.form`
    display:flex;
    margin-left:40px;
    flex-flow: column wrap;
    flex: 0 1 40%;
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
    background-color:#F2F2F2;
    display:block;
    min-width:15rem;
    display:flex;
    flex-direction:column;

    font-weight:bold;
    padding-left:10px;
    color:#51B981;
    
    &:hover{
        background:white;
        transition:0.3s;
        
        border-top-right-radius:5px;
        border-bottom-right-radius:5px;
    }
    &:focus{
        background:white;
        transition:0.5s;
        border-top-right-radius:30px;
        border-bottom-right-radius:30px;
    }
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
    color: white;

    &:hover {
    transition-duration:1s;
    background:#FFB23E;
    cursor: pointer
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