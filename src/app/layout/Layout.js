import React, { Component } from 'react'
import Header from "./Header";


class Layout extends Component{

    constructor(props){
        super(props)
    }

    render (){
        return (
            <div className="be-wrapper be-nosidebar-left">

                <Header/>

                <div className="be-content">

                    {this.props.children}

                </div>
            </div>
            
        );
    }
}

export default Layout;
