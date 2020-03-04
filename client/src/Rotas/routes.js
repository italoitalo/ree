import React from 'react';
import { isAutenticated } from './auth';

import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import Home from './../views/viewsPublic/landpage/landpageIndex'
import HomePrivate from './../views/HomePrivate'
import CadastroExt from './../views/CadastroExt'
import BioPerfil from './../views/Perfil/BioPerfil'
import Contato from './../views/Contato'
import ContatoPub from './../views/viewsPublic/ContatoPublic'
import Login from './../views/Login'
import SuasDoacoes from '../views/SuasDoacoes'
import NovoCadastro from './../views/NovoCadastro'
import NovoCadastroProduto from './../views/NovoCadastroProduto'
import DoacaoEnviada from'./../views/Confirm/DoacaoEnviada'
import CadastroRealizado from'./../views/Confirm/CadastroRealizado'
import DoacoesPerfil from './../views/Perfil/DoacoesPerfil'
import InteressesPerfil from './../views/Perfil/InteressesPerfil'
import ConfigPerfil from './../views/Perfil/ConfigPerfil'
import Chat from './../views/chat'
import BarraDeBusca from './../componentes/BarraDeBusca'

const PrivateRoute = ({component: Component,...rest}) =>(
    <Route 
        {... rest} 
        render={props => 
            isAutenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname:'/', state:{from: props.location} }} />
        )
    }
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} /> 

        <PrivateRoute exact path="/private" component={HomePrivate}/>
        <PrivateRoute exact path="/perfil" component={BioPerfil}/>     
        <PrivateRoute  path="/contato" component={Contato}/>
        <PrivateRoute  path="/doe" component={NovoCadastroProduto}/>
        <PrivateRoute path='/doacaoenviada' component={DoacaoEnviada}/>
        <PrivateRoute path='/CadastroRealizado' component={CadastroRealizado}/>
        <PrivateRoute exact path="/perfil/doacoes" component={DoacoesPerfil}/>   
        <PrivateRoute exact path="/perfil/interesses" component={InteressesPerfil}/>   
        <PrivateRoute exact path="/perfil/config" component={ConfigPerfil}/> 
        <PrivateRoute exact path="/home/suasdoacoes" component={SuasDoacoes}/> 
        <PrivateRoute exact path="/chat" component={Chat}/> 
        

        <PrivateRoute exact path="/asd" component={() => <h1>Você está logado</h1> }/>
        <PrivateRoute exact path="/privado" component={() => <h1>Você está logado</h1> }/>

        <Route exact path="/barradebusca" component={BarraDeBusca}/>

     
                    <Route  path="/cadastro" component={NovoCadastro}/>
                    <Route  path="/login" component={Login}/>
                    <Route path='/cadastroext' component={CadastroExt}/>
                    <Route  path="/contatoPub" component={ContatoPub}/>
                    <Route exact path="/" component={() => <h1>Hello world!</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
