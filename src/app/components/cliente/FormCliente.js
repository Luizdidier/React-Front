import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CompactPicker } from 'react-color';
import {createContact, getContact} from "./redux_contato/contact_action";

class FormCliente extends Component{

  constructor(props){
    super(props);



    //this.handleChangePrimary = this.handleChangePrimary.bind(this);
    //this.handleChangeSecondary = this.handleChangeSecondary.bind(this);
    //this.handleChangeDetails = this.handleChangeDetails.bind(this);
  }


  render (){

}
}

const mapStateToProps = state => {

};

export default connect(mapStateToProps, {createContact, getContact})(FormCliente);
