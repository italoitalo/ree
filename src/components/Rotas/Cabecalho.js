import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Rotas from './Rotas';

export default function Cabecalho(){
    return(
        <nav>
                <Router>
                    <Switch>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/cadastro">Cadastro</Link></li>
                            <li><Link to="/perfil">perfil</Link></li> 
                        </ul>
                    </Switch>
                </Router>
           
        </nav>
    )
}