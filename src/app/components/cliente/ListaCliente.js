import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CompactPicker } from 'react-color';
import _ from 'lodash'

import {fetchContact, deleteContact, updateContact} from "./redux_contato/contact_action";


class ViewContact extends Component{

  constructor(props){
    super(props);

      this.state={
        contact: [],
        isEditing: false,
        url: '',
        primaryColor: '',
        secondColor: '',
        detailsColor:''
      }
      this.handleChangePrimary = this.handleChangePrimary.bind(this);
      this.handleChangeSecondary = this.handleChangeSecondary.bind(this);
      this.handleChangeDetails = this.handleChangeDetails.bind(this);

  }
  componentWillMount(){
   this.props.fetchContact();
  }

  handleDelete(contact){
   this.props.deleteContact(contact);

  }



  handleUpdate(e){
        e.preventDefault();
        const {url} = this.refs;
        const link = url.value;
        const cont = {...this.state.contact, url: link,
                      site_main_color: this.state.primaryColor,
                      site_second_color: this.state.secondColor,
                      site_details_color: this.state.detailsColor};
        this.props.updateContact(cont);
        this.setState({isEditing: false})
    }

  editMethod(contact){
      if(this.state.isEditing) {
          this.setState({isEditing: false});
      }else{
          this.setState({isEditing: true});
          const novo = {...this.state.contact,
                        id: contact.id,
                        url: contact.url,
                        primaryColor: contact.site_main_color,
                        secondColor: contact.site_second_color,
                        detailsColor: contact.site_details_color
          };
          console.log(novo);
          this.setState({contact: novo});
          this.setState({primaryColor: contact.site_main_color, secondColor: contact.site_second_color, detailsColor: contact.site_details_color })
          this.setState({url: contact.url});

      }

  }

   handleChangePrimary(color) {
      this.setState({primaryColor: color.hex});
    };

   handleChangeSecondary(color) {
      this.setState({secondColor: color.hex});
    };

   handleChangeDetails(color) {
      this.setState({detailsColor: color.hex});
    };

  method(state){
      if(state){
          return(
              <center>
              <form className='form-group' onSubmit={(e) => this.handleUpdate(e)} style={{marginBottom: '2%'}}>
              <input
                  defaultValue={this.state.url}
                  className='form-control' ref='url'
                  pattern="https?://.+\.[a-z]{2,3}$"
                  title='Exemplo : https://www.exemplo.com'
                  placeholder='Url...'
                  style={{width: '50%', height: '50%'}}
              />
              <span className='line-space'></span>
              <div>
                  <label>Cor Principal</label>
              </div>
              <CompactPicker color={this.state.primaryColor} onChange={ this.handleChangePrimary }/>
              <span className='line-space'></span>
              <div>
                  <label> Cor Secundária </label>
              </div>
              <span className='line-space'></span>
              <CompactPicker color={this.state.secondColor} onChange={ this.handleChangeSecondary }/>
              <span className='line-space'></span>
              <div>
                  <label> Cor Detalhes </label>
              </div>
              <span className='line-space'></span>
              <CompactPicker color={this.state.detailsColor} onChange={ this.handleChangeDetails }/>
              <span className='line-space'></span>
              <input type='submit' value='Salvar' className='btn btn-primary' style={{marginLeft: '1%'}} />
              <button onClick={() => this.setState({isEditing: false})} className='btn btn-danger' style={{marginLeft: '1%'}}> Cancelar </button>
              </form>
              </center>
          );
      }

  }

  render (){
    const list =_.map(this.props.contacts, (contact, key) => {
        return(
                <tr key={key} style={{borderBottom:'1px solid #ddd'}}>
                <td className='table-bordered' style={{textAlign:'center'}} >{contact.id} </td>
                <td className='table-bordered' style={{textAlign:'center'}} >{contact.url} </td>
                <td> <center> <div style={{background: contact.site_main_color, height: '20px', width: '55px'}}> </div> </center></td>
                <td> <center> <div style={{background: contact.site_second_color, height: '20px', width: '55px'}}></div> </center> </td>
                <td> <center> <div style={{background: contact.site_details_color, height: '20px', width: '55px'}}></div> </center> </td>
                <td className='table-bordered' style={{textAlign:'center'}}>
                <button className='btn btn-danger' onClick={() => this.handleDelete(contact)}> Delete </button>
                <button className='btn btn-warning' style={{marginLeft:'2%'}} onClick={() => this.editMethod(contact)}>Edit</button>
                </td>
              </tr>
        );
        });


    return (
        <div>
            {this.method(this.state.isEditing)}
        <table className='table'>
        <thead>
        <tr className='table-bordered'>
            <th style={{textAlign:'center', width:'10%', minWidth:'10%' }}>Id</th>
            <th style={{textAlign:'center'}}>Url</th>
            <th style={{textAlign:'center', width:'10%', minWidth:'10%'}}>Principal</th>
            <th style={{textAlign:'center', width:'10%', minWidth:'10%'}}>Secundária</th>
            <th style={{textAlign:'center', width:'10%', minWidth:'10%'}}>Detalhes</th>
            <th style={{textAlign:'center'}}> <a href='/#/cadastrarsite' className='btn btn-primary'> Novo Site </a> </th>
        </tr>
        </thead>
        <tbody>
        {list}
        </tbody>
        </table>
        </div>
    );
  }
}

const mapStateToProps = state => {
  const {all} = state.contact || [];
  return {contacts: all};
};

export default connect(mapStateToProps, {fetchContact, deleteContact, updateContact})(ViewContact);
