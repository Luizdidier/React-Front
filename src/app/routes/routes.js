import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from '../App'
import DummyComponent from '../components/test/DummyComponent'
import Client from '../components/client/rootComponent'
import FormC from '../components/cliente/FormCliente'
import PageComponent from "../components/login/PageComponent";

export default (

        <Route path="/" component={App}>

            <IndexRoute component={ props => protectedRoute(props, DummyComponent ) }/>

            <Route path='/busca' components={PageComponent}/>
            <Route path='/termos' components={f => <h1>Termos</h1>}/>
            <Route path='/clientes' components={Client}/>
            <Route path='/cadastrarsite' components={FormC}/>
        </Route>

);

const protectedRoute = (props, Component, ...rest) => {

    return true? <Component {...props} {...rest}/> : f => <h1> Unable to access protected route. </h1>;

}
