import React, { Component } from 'react'
import { connect } from 'react-redux'
import {shareValue} from "./redux/dummy_action";

class Form extends Component{

    constructor(props){
        super(props)
    }

    handleSubmit(e){
        e.preventDefault();
        const {name} = this.refs;
        this.props.shareValue(name.value)
        name.value = '';
        name.focus()
    }

    render (){
        return (<div className='row'>
                    <div className='col-md-4'>

                        <form onSubmit={(e) => this.handleSubmit(e)} className='form-group'>
                            <input type='text' ref='name' className='form-control' />
                            <input type='submit' value='SEND' className='form-control'/>
                        </form>

                    </div>
                </div>);
    }
}

export default connect(null, {shareValue})(Form);
