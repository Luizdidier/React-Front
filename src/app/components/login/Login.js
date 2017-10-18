import React, { Component } from 'react'
import { connect } from 'react-redux'

import {fetchUser} from "./redux_login/login_action";

class Login extends Component{

    constructor(props){
        super(props)

        this.state={
          checkbox: true
        }
    }

    componentWillMount(){
      console.log(this.props.fetchUser());
    }

    handleSubmit(e){
        e.preventDefault();
        const {email, password} = this.refs;
        console.log(email.value + " " + password.value);
    }


    toggleChange(e){
      const {checked} = e.target;
      this.setState({checkbox: !this.state.checkbox})

    }



    render (){
        return (
            <div className="main-content container-fluid">
                <div className="splash-container box-shadow">
                    <div className="panel panel-default panel-border-color panel-border-color-primary">
                        <div className="panel-heading">
                        <img src="assets/img/logo-title.png"
                         alt="logo"
                         width="80"
                         height="80"
                         className="logo-img"/>
                        </div>
                        <div className="panel-body">
                            <form onSubmit={(e) => this.handleSubmit(e)}>
                                <div className="login-form">
                                    <div className="form-group">
                                        <input id="email"
                                         type="text"
                                         placeholder="Email"
                                         ref='email'
                                         className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <input id="password"
                                         type="password"
                                         placeholder="Password"
                                         ref='password'
                                         className="form-control"/>
                                    </div>
                                    <div className="form-group row login-tools">
                                        <div className="col-xs-6">
                                            <div className="be-checkbox">
                                            <input id='check' type="checkbox"
                                             checked={this.state.checkbox}/>
                                                    <label onClick={e => this.toggleChange(e)}>Lembrar Me</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row login-submit">
                                        <div className="col-xs-6">
                                            <button data-dismiss="modal"
                                             type="submit" className="btn btn-primary btn-xl">
                                             Entrar
                                            </button>
                                        </div>
                                        <div className="col-xs-6">
                                            <button data-dismiss="modal"
                                             type="submit"
                                             className="btn btn-default btn-xl">
                                             Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => {
    const {all} = state.contact || [];
    return {contacts: all};
};


export default connect(mapStateToProps, {fetchUser})(Login);
