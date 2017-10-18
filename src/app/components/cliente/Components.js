import React, { Component } from 'react'

import ListaCliente from './ListaCliente'

class Components extends Component{

    constructor(props){
        super(props)
    }

    render (){
        return (
                <div className="main-content container-fluid">
                    <div className="row">
                    <div className='col-md-12'>
                        <ListaCliente/>
                    </div>
                    </div>
                </div>);
    }
}

export default Components;
