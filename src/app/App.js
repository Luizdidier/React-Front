import React, { Component } from 'react';
import Layout from './layout/Layout'

class App extends Component{

    constructor(props){
        super(props)
    }

    render (){
        return <div>
                <Layout>
                     {this.props.children}
                </Layout>
               </div>
    }
}

export default App;
