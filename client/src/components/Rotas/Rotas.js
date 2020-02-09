import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './../../landpage/landpageIndex'
import HomePrivate from '../HomePrivate'
import CadastroExt from '../CadastroExt'
import BioPerfil from '../Perfil/BioPerfil'
import Contato from './../Contato'
import Login from './../Login'
import SuasDoacoes from './../TelaUserLogado/SuasDoacoes'
import Doacoes from './../Doacoes/Doacoes'


import NovoCadastro from '../NovoCadastro'
import NovoCadastroProduto from '../NovoCadastroProduto'

import DoacaoEnviada from'../Confirm/DoacaoEnviada'
import CadastroRealizado from'../Confirm/CadastroRealizado'


import DoacoesPerfil from '../Perfil/DoacoesPerfil'
import InteressesPerfil from '../Perfil/InteressesPerfil'
import ConfigPerfil from '../Perfil/ConfigPerfil'
export default function Rotas(){
    return(
        <>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/private" component={HomePrivate}/>
                    <Route exact path="/perfil" component={BioPerfil}/>     
                    <Route  path="/cadastro" component={NovoCadastro}/>         
                    <Route  path="/contato" component={Contato}/>
                    <Route  path="/login" component={Login}/>
                    <Route  path="/doe" component={Doacoes}/>
                    <Route path='/cadastroext' component={CadastroExt}/>
                    <Route path='/cadastroproduto' component={NovoCadastroProduto}/>
                    
                    <Route path='/doacaoenviada' component={DoacaoEnviada}/>
                    <Route path='/CadastroRealizado' component={CadastroRealizado}/>
                    {/* <Route  path="/cardsrout" component={cardsrout}/> */}



                    <Route exact path="/perfil/doacoes" component={DoacoesPerfil}/>   
                    <Route exact path="/perfil/interesses" component={InteressesPerfil}/>   
                    <Route exact path="/perfil/config" component={ConfigPerfil}/> 
                    <Route exact path="/home/suasdoacoes" component={SuasDoacoes}/> 
                </Switch>        
        </>
    )
}