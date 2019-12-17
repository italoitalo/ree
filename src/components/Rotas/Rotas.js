import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './Home'
import About from './About'
import PadraoPerfil from '../PadraoPerfil';
import formCadastro from '../formCadastro';
import Cabecalho from './Cabecalho';

export default function Rotas(){
    return(
        <>
            <Router>
                <Switch>
                <Route path="/" component={Home}/>
                <Route path="/about" component={About}/>            
                <Route path="/cadastro" component={formCadastro}/>            
                <Route path="/perfil" component={PadraoPerfil}/>            
                </Switch>
            </Router>            
        </>
    )
}