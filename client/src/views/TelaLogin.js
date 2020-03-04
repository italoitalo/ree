import React from 'react';
import styled from 'styled-components';

import UserPerfil from './../img/TelaLogin/UserPerfil.png'


export default function TelaLogin() {
    return ( 
    <Container>
        <Figure>
            <ImgUSer alt="fotoUserPerfil" src={UserPerfil}/>
        </Figure>
        <Form action="/login" method="post">
            <DivUserPass>
                <InputLogin type="email" placeholder="Login" name="emaillogin" id="emaillogin"/>
            </DivUserPass>

            <DivUserPass>
                <InputLogin type="password" placeholder="Senha"name="password" id="password"/>
            </DivUserPass>
            <Buttons>
                <ButtonLogin type="submit">{/* <ALogin href="/private"> */}Login{/* </ALogin> */}</ButtonLogin>
                
                <Paragrafo>Não possui conta?</Paragrafo>
                <ButtonCadastro><AA href="/cadastro">Cadastre-se</AA></ButtonCadastro>
            </Buttons>
        </Form>
    </Container> 
    )
}


const AA = styled.a`
text-decoration:none;
color: #FFFFFF;
`

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


const InputLogin = styled.input`
    display:block;
    min-width: 13rem;
    padding:10px;
    font-weight: bold;
    font-size: 16px;
    
    background:white;
    color: #51B981;
`;


// const ALogin = styled.a`
//     margin:40px;
//     min-width: 150px;
//     min-height: 50px;

//     cursor: pointer;

//     font-size: 13px;
//     font-weight:bolder;

//     color: #F2C94C;

//         &:hover{
//     transition: 1s;
//     border: none;

//     color:white;
// }
// `;




const ButtonLogin = styled.button`
    margin:40px;
    min-width: 150px;
    min-height: 50px;
    border: solid #F2C94C;
    cursor: pointer;

    font-size: 13px;
    font-weight:bolder;

    color: #F2C94C;

        &:hover{
    transition: 1s;
    border: none;
    background: #FFA31A;
    color:white;
}
`;
const ButtonCadastro = styled.button`
    min-width: 200px;
    min-height: 25px;
    background: #8E8E8E;    
    cursor: pointer;
    text-decoration:none;


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

