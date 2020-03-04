import React from 'react';
import styled from 'styled-components';

import {Link} from 'react-router-dom'

import ree from './../img/ree.svg'
import useModal from '../views/useModal'
import Modal from '../views/Modal';

export default function Cabecalho(){
    const {isShowing, toggle} = useModal();
    return(
        <>
            <Header>
                <Div>
                    <Navigation to="/"><Logo src={ree} height='40' /></Navigation>
                    <Navigation to ="/cadastro"><Button>Faça uma Doação!</Button></Navigation>
                </Div>
                <Ul>     
                    <Navigation to="/"><Li>Home</Li></Navigation>
                    <Navigation to="/contatoPub"><Li>Contato</Li></Navigation>
                    <Navigation to="/cadastro"><Li>Cadastro</Li></Navigation>
                    {/* <Navigation to="/private"><Li>teste</Li></Navigation> */}
                    <Navigation to="#" ><Li onClick={toggle}>Login</Li></Navigation> 
                    <Modal isShowing={isShowing} hide={toggle} /> 
                </Ul>
            </Header>
        </>
    )
}

const Div = styled.div`

display:flex;
justify-content:space-between;
width:100%;

`


const Navigation = styled(Link)`
text-decoration:none;
margin:0;
`

const Button = styled.button`
    display:flex;
    padding:10px;
    margin: 5px 0 0 0;
    color: rgb(68, 226, 139);
    font-weight:bolder;
    border: 2px solid rgb(68, 226, 139);
    font-family: 'Merriweather Sans', sans-serif;
    font-size: 14px;

    &:hover{
        transition: 0.2s;
        background-color: rgb(68, 226, 139);;
        color: white
    }
`

const Header= styled.div`
    display:flex;
    background-color: white;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
    position:relative;

    @media (max-width: 760px) {
    flex-direction: column;
    }
`

const Logo = styled.img`
    height: 45px;
    margin: 5px 30px 0 30px;
`

const Li = styled.li`
    padding:10px;
    margin: 9px 10px;
    
    color: black;
    font-family: 'Merriweather Sans', sans-serif;
    font-size: 14px;
    
    
    @media (max-width: 760px){

        padding:5px;
        margin: 0px;
        font-size:12pt;
    
    };

    &:hover{
    background: -webkit-linear-gradient(rgb(68, 233, 90),rgb(39, 177, 58) );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-color:whitesmoke;
    };
` 

const Ul = styled.ul`
display:flex;
width:100% ;
justify-content: flex-end;

@media (max-width: 760px){
    width: 100%;
    justify-content:space-between;
    flex-wrap: wrap;
}
`