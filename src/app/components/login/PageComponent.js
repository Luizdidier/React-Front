import React, { Component } from 'react'
import Login from './Login'


class PageComponent extends Component{

    constructor(props){
        super(props)
    }

    render (){
        return (
            <div className="main-content container-fluid">
                <div className="row">
                    <div className='col-md-12'>
                        <Login/>
                    </div>
                </div>
            </div>);
    }
}

export default PageComponent;
