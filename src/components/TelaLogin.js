import React from 'react';
import styled from 'styled-components';

import UserPerfil from './../img/TelaLogin/UserPerfil.png'
import Userfoto from './../img/TelaLogin/Userfoto.png'
import UserPass from './../img/TelaLogin/UserPass.png'

export default function TelaLogin() {
    return ( 
    <Container>
        <Figure>
            <ImgUSer src={UserPerfil}/>
        </Figure>
        <Form action="">
            <DivUserPass>
                <ImgInput src={Userfoto}/>
                <InputLogin type="text" placeholder="Login" name="" id=""/>
            </DivUserPass>

            <DivUserPass>
                <ImgInput src={UserPass}/>
                <InputLogin type="password" placeholder="Senha"name="" id=""/>
            </DivUserPass>
            <Buttons>
                <ButtonLogin type="submit">Login</ButtonLogin>
                <Paragrafo>Não possui conta?</Paragrafo>
                <ButtonCadastro type="password">Cadastre-se</ButtonCadastro>
            </Buttons>
        </Form>
    </Container> 
    )
}




const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:0px 30px 30px 30px;

`;

const Figure = styled.figure`

`;

const ImgUSer = styled.img`
    width: 112px;
    height: 113px;
`;

const Form = styled.form`
`;

const DivUserPass = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    margin: 8px;
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ImgInput = styled.img`
    width: 30px;
    height: 30px;
`;

const InputLogin = styled.input`
    height: 30px;
    display:block;
    min-width: 13rem;
    
    font-family:'Catamaran', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    
    background:white;
    color: #828282;
`;
const ButtonLogin = styled.button`
    margin:40px;
    min-width: 200px;
    min-height: 27px;
    background: linear-gradient(90deg, #F2C94C 3.26%, #FFA31A 100.19%);
    cursor: pointer;

    font-family:'Catamaran', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;

    color: #FFFFFF;
`;
const ButtonCadastro = styled.button`
    min-width: 200px;
    min-height: 25px;
    background: #8E8E8E;    
    cursor: pointer;

    font-family:'Catamaran', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;

    color: #FFFFFF;
    
`;
const Paragrafo = styled.p`
    font-family:'Catamaran', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;


    color: #999999;
    
    margin:8px;
`;

