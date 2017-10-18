import React, { Component } from 'react'
import FormCadastro from './formCadastro'

class rootComponent extends Component{

    constructor(props){
        super(props)
    }

    render (){
        return (
            <div className="main-content container-fluid">
                <div className="row">
                    <div className='col-md-12'>
                        <FormCadastro/>
                    </div>
                </div>
            </div>);
    }
}

export default rootComponent;
