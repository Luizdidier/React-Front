import React, { Component } from 'react'

class formCadastro extends Component{

    constructor(props){
        super(props)
    }

    render (){
        return (
      <div>
          <div className="main-content container-fluid">
              <div className="box-shadow">
                  <div className="panel panel-default panel-border-color panel-border-color-primary">
                      <div className="panel-heading">
                          <center>
                          <img src="assets/img/logo-title.png"
                               alt="logo"
                               width="80"
                               height="80"
                               className="logo-img"/>
                          </center>
                      </div>
                      <div className="panel-body">
                          <form onSubmit={(e) => this.handleSubmit(e)}>
                              <div className="login-form">

                                  <div className="form-inline">

                                  </div>
                                  <div className="form-group">
                                      <input id="nome"
                                             type="text"
                                             placeholder="Nome completo"
                                             ref='nome'
                                             className="form-control"/>
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
      </div>
            );
    }
}

export default formCadastro;
