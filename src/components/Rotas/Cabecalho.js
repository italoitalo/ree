import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import ree from './../../img/ree.svg'
import useModal from './../useModal'
import Modal from "./../Modal";

export default function Cabecalho(){
    const {isShowing, toggle} = useModal();
    return(
        <>
            <Div>
                <Navigation to="/"><Logo src={ree} height='40' /></Navigation>
            
                <Ul>     
                    <Navigation to ="/doe"><Button>Faça uma Doação!</Button></Navigation>
                    <Navigation to="/"><Li>Home</Li></Navigation>
                    <Navigation to="/cadastro"><Li>Cadastro</Li></Navigation>
                    <Navigation to="#" ><Li onClick={toggle}>Login</Li></Navigation>
                    <Navigation to="/perfil"><Li>Perfil</Li></Navigation>
                    <Navigation to="/contato"><Li>Contato</Li></Navigation>
                    <Modal isShowing={isShowing} hide={toggle} /> 
                </Ul>
            </Div>
        </>
    )
}

const Navigation = styled(Link)`
text-decoration:none;
`
const Button = styled.div`
    padding:10px;
    padding-left:30px;
    padding-right:30px;
    margin-top:5px;
    margin-right:20px;
    color: black;
    background-color:#51B981;
    border-radius:20px;
    font-family: 'Merriweather Sans', sans-serif;
    font-size: 14px;

    &:hover{
        color: white;
    }
`



const Div= styled.div`
    display:flex;
    background-color: whitesmoke;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
    position:relative;
`

const Logo = styled.img`
    
    padding-left:20px;
    padding-top:10px;
`

const Li = styled.li`
    padding:5px;
    margin-top:10px;
    margin-right:20px;
    color: black;
    font-family: 'Merriweather Sans', sans-serif;
    font-size: 14px;

    &:hover{
        color: #51B981;
        background-color:whitesmoke;
    }
`  

const Ul = styled.ul`
display:flex;
width:100% ;
justify-content: flex-end;
`