import React from 'react';
import styled from  'styled-components';

// USE ESSE TEMPLATE COM ESSA CONFIGURÇÃO DO "<Main>" 
// ASSIM O CODIGO FICARÁ DE ACORDO COM O MENU DE NAVEGAÇÃO
// COLOQUE O CONTEÚDO DO SEU COMPONENTE DENTRO DA TAG "<Main>"
// TODO O RESTO PODE SER EXCLUIDO E ALTERADO
// USE SOMENTE PARA COPIAR E COLAR, NAO APAGUE ESSE ARQUIVO

export default function PadraoPerfil() {
    return ( 
        <div>
            <Main>
                <H1>EXEMPLO EXEMPLO</H1>
                <H1>EXEMPLO EXEMPLO</H1>
                <H1>EXEMPLO EXEMPLO</H1>
                <H1>EXEMPLO EXEMPLO</H1>
                <H1>EXEMPLO EXEMPLO</H1>
                <H1>EXEMPLO EXEMPLO</H1>
                <H1>EXEMPLO EXEMPLO</H1>
            </Main>
        </div>
        )
    }

//Const H1 é somente um exemplo e pode ser excluida
const H1 = styled.h1`
font-size: 100px;
color: black;
`
//Const Main deve ser mantida
const Main = styled.section`
margin-left:300px;
`