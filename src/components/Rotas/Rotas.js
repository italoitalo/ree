import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './../Home'
import FormCadastro from '../FormCadastro'
import BioPerfil from '../Perfil/BioPerfil'
import Contato from './../Contato'
import Login from './../Login'

import DoacoesPerfil from '../Perfil/DoacoesPerfil'
import InteressesPerfil from '../Perfil/InteressesPerfil'
import ConfigPerfil from '../Perfil/ConfigPerfil'

export default function Rotas(){
    return(
        <>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/perfil" component={BioPerfil}/>     
                    <Route  path="/cadastro" component={FormCadastro}/>         
                    <Route  path="/contato" component={Contato}/>
                    <Route  path="/login" component={Login}/>


                    <Route exact path="/perfil/doacoes" component={DoacoesPerfil}/>   
                    <Route exact path="/perfil/interesses" component={InteressesPerfil}/>   
                    <Route exact path="/perfil/config" component={ConfigPerfil}/>   
                </Switch>        
        </>
    )
}