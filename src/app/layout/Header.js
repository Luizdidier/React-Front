import React, { Component } from 'react'
import Menu from './Menu'

class Header extends Component{

    constructor(props){
        super(props)
    }

    render (){
        return (
            <nav className="navbar navbar-default navbar-fixed-top be-top-header">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a href="index.html" className="navbar-brand"/>
                    </div>
                    <div className="be-right-navbar">
                        <ul className="nav navbar-nav navbar-right be-user-nav">
                            <li className="dropdown">
                                <a href="#" data-toggle="dropdown" role="button" aria-expanded="false" className="dropdown-toggle">
                                    <img src="./assets/img/avatar.png" alt="Avatar"/>
                                    <span className="user-name">Túpac Amaru</span>
                                </a>
                                <ul role="menu" className="dropdown-menu">
                                    <li>
                                        <div className="user-info">
                                            <div className="user-name">Túpac Amaru</div>
                                            <div className="user-position online">Available</div>
                                        </div>
                                    </li>
                                    <li><a href="#"><span className="icon mdi mdi-face"/> Account</a></li>
                                    <li><a href="#"><span className="icon mdi mdi-settings"/> Settings</a></li>
                                    <li><a href="#"><span className="icon mdi mdi-power"/> Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right be-icons-nav">
                            <li className="dropdown"><a href="#" role="button" aria-expanded="false" className="be-toggle-right-sidebar">
                                <span className="icon mdi mdi-menu"/></a></li>
                            {/*<!-- be-toggle-top-header-menu collapsed-->*/}
                            <li className="dropdown">
                                <a href="#" data-toggle="collapse" data-target="#be-navbar-collapse"className="">
                                </a>
                                <ul className="dropdown-menu be-connections">
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <Menu/>

                </div>
            </nav>
        );
    }
}

export default Header;
