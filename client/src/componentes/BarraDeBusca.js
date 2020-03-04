import React from 'react'
import styled from 'styled-components'

export default function Busca() {
    return (
      <>
      <Barra type="text" placeholder="Buscar"/>
      
      </>)
      }

const Barra = styled.input`
    align-self:center;
    width: 60%;
    padding: 5px;
    margin:5px;
    background-color:whitesmoke;
    border-radius:5px;
    box-shadow:none;
    border:0px;

    &::placeholder{
        text-align:center;
        font-weight:200;
    }


    &:hover{
        border:0px;
        transition:0.1s;
        &::placeholder{
        transition:0.1s;
            color:whitesmoke;
        }
    }

`