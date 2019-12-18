import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './../Home'
import formCadastro from './../formCadastro'
import PadraoPerfil from './../PadraoPerfil'
import Contato from './../Contato'

export default function Rotas(){
    return(
        <>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cadastro" component={formCadastro}/>            
                    <Route path="/perfil" component={PadraoPerfil}/>            
                    <Route path="/contato" component={Contato}/>            
                </Switch>        
        </>
    )
}