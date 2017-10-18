import React, { Component } from 'react'
import Form from './Form'
import View from './View'

class DummyComponent extends Component{

    constructor(props){
        super(props)
    }

    render (){
        return (<div className="main-content container-fluid">
                    <div className="row">
                        <Form/>

                        <View/>
                    </div>
                </div>);
    }
}

export default DummyComponent;
