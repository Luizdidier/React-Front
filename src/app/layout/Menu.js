import React, { Component } from 'react'

class Menu extends Component{

    constructor(props){
        super(props)
    }

    render (){
        return (
            <div id="be-navbar-collapse" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li><a href="/#/">HOME</a></li>
                    <li><a href="/#/busca">Login</a></li>
                    <li><a href="/#/xxxxx">XXXX</a></li>
                    <li><a href="/#/clientes">Clientes</a></li>
                </ul>
            </div>
        );
    }
}

export default Menu;
