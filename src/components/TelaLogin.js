import React from 'react';
import styled from 'styled-components';

import UserPerfil from './../img/TelaLogin/UserPerfil.png'
import Userfoto from './../img/TelaLogin/Userfoto.png'
import UserPass from './../img/TelaLogin/UserPass.png'

export default function TelaLogin() {
    return ( <Container>
        <Figure>
            <ImgUSer src={UserPerfil}/>
        </Figure>
        <Form action="">
            <DivUserPass>
                <ImgInput src={Userfoto}/>
                <InputLogin type="email" name="" id=""/>
            </DivUserPass>

            <DivUserPass>
                <ImgInput src={UserPass}/>
                <InputLogin type="password" name="" id=""/>
            </DivUserPass>
            <Buttons>
                <ButtonLogin type="submit">Login</ButtonLogin>
                <Paragrafo>Não possui conta?</Paragrafo>
                <ButtonCadastro type="submit">Cadastre-se</ButtonCadastro>
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
    width: 112.65px;
    height: 113.03px;
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
 /*    background: #E0E0E0; */
    height: 30px;
 /*    border-radius: 0 50px 50px 0; */
    display:block;
    min-width: 13.9375rem;
    
    font-family:'Catamaran', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15.5176px;
    line-height: 16px;
    
    
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
    font-size: 13.5176px;
    line-height: 16px;

    color: #FFFFFF;
`;
const ButtonCadastro = styled.button`
    min-width: 200px;
    min-height: 27px;
    background: #8E8E8E;    
    cursor: pointer;

    font-family:'Catamaran', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 13.5176px;
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

