import React, { Component } from 'react'
import { connect } from 'react-redux'

import {fetchCep} from "./redux_cliente/client_action";

class formCadastro extends Component{

    constructor(props){
        super(props)

        this.state ={
            end: '',
        }
    }

    componentWillMount(){

    }

    componentDidMount(){

    }

    handleSubmit(e){
       e.preventDefault();
       const {cpf, nome, telefone, cep, rua, bairro, cidade} = this.refs;
       const client = {
           cpf: cpf.value,
           nome: nome.value,
           telefone: telefone.value,
           cep: cep.value,
           rua: rua.value,
           bairro: bairro.value,
           cidade: cidade.value
       }
       //console.log(client);
    }

    handleClear(){
        const {cpf, nome, telefone, cep, rua, bairro, cidade} = this.refs;
        cpf.value = '';
        nome.value = '';
        telefone.value = '';
        cep.value = '';
        rua.value = '';
        bairro.value = '';
        cidade.value = '';
    }

    getEnd(){
        const {cep, rua, bairro, cidade} = this.refs;
        this.props.fetchCep(cep.value).then(response => {
            rua.value = response.payload.data.logradouro;
            bairro.value = response.payload.data.bairro;
            cidade.value = response.payload.data.localidade;
        });


    }

    render (){

        return (

        <span>
            <center>
            <div className="panel panel-default panel-border-color panel-border-color-primary" style={{width:'60%'}}>
                <div className="panel-heading panel-heading-divider">
                    <img src="assets/img/logo-title.png"
                         alt="logo"
                         width="80"
                         height="80"
                         className="logo-img"/>
                </div>
                <div className="panel-body">

                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <div className="form-group xs-pt-10">
                            <p className='text-left'><label>CPF</label></p>
                            <p className='text-left'>
                                <input type="text" name='cpf' id='cpf' ref='cpf' placeholder="CPF" className="form-control" style={{width:'30.5%'}}/>
                            </p>
                        </div>

                        <div className="form-group">
                            <p className='text-left'><label>Nome Completo</label></p>
                            <input type="text" placeholder="Nome Completo" ref='nome' className="form-control"/>
                        </div>

                        <div className="form-group">
                            <p className='text-left'><label>Telefone</label></p>
                            <p className='text-left'>
                                <input type="text" placeholder="Telefone" ref='telefone' className="form-control" style={{width:'30.5%'}}/>
                            </p>
                        </div>

                        <div className="form-group">
                            <p className='text-left'><label>CEP</label></p>
                            <span className='form-inline'>
                                <p className='text-left'>
                                    <input type="text" placeholder="CEP" className="form-control" ref='cep'/>
                                    <span style={{paddingLeft: '5px'}}></span>
                                    <button onClick={() => this.getEnd()} className="btn btn-space btn-primary">Check</button>
                                </p>
                            </span>
                        </div>

                         <div className="form-group">
                            <p className='text-left'><label>Rua</label></p>
                            <input type="text" placeholder="Rua" ref='rua' className="form-control" disabled={true}/>
                        </div>

                        <div className="form-group">
                            <p className='text-left'><label>Bairro</label></p>
                           <p className='text-left'>
                               <input type="text" placeholder="Bairro" ref='bairro' className="form-control" style={{width:'60%'}} disabled={true}/>
                           </p>
                        </div>

                         <div className="form-group">
                            <p className='text-left'><label>Cidade</label></p>
                            <p className='text-left'>
                                <input type="text" placeholder="Cidade" ref='cidade' className="form-control" style={{width:'60%'}} disabled={true}/>
                            </p>
                        </div>

                        <p className="text-right">
                            <button type="submit" className="btn btn-space btn-primary">Submit</button>
                            <button onClick={() => this.handleClear()} className="btn btn-space btn-default">Cancel</button>
                        </p>
                    </form>
                </div>
            </div>
            </center>
        </span>

            );
    }
}

const mapStateToProps = state => {
    const {all} = state.cep || [];
    return {cep: all};
};

export default connect(mapStateToProps, {fetchCep})(formCadastro);

