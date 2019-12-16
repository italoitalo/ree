import React from 'react';
import styled from  'styled-components';

import NavPerfil from './NavPerfil'
// USE ESSE TEMPLATE COM ESSA CONFIGURÇÃO DO "<Container> <div> <Section> <NavPerfil>" 
// ASSIM O CODIGO FICARÁ DE ACORDO COM O MENU DE NAVEGAÇÃO
// COLOQUE O CONTEÚDO DO SEU COMPONENTE DENTRO DA TAG "<Section>"
// TODO O RESTO PODE SER EXCLUIDO E ALTERADO

export default function PadraoPerfil() {
    return ( 
        <>  
            <Container>
                <div>
                    <NavPerfil/>
                </div>
                <Section>
                    <H1>INSIRA SUA TELA AQUI</H1>
                    <H1>INSIRA SUA TELA AQUI</H1>
                    <H1>INSIRA SUA TELA AQUI</H1>
                    <H1>INSIRA SUA TELA AQUI</H1>
                </Section>
            </Container>
        </>
        )
    }

//Const H1 é somente um exemplo e pode ser excluida
const H1 = styled.h1`
font-size: 80px;
color: black;
`
//Const Section pode ser alterada e estilizada, mas não excluida
const Section = styled.section`
`
//Const Container deve ser mantida
const Container = styled.section`
display: flex;`