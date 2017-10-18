import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

class View extends Component{

    constructor(props){
        super(props)
    }

    render (){

        const items = _.map(this.props.list, f => <li key={_.uniqueId()}>{f}</li>)
        return (<div>
                   <ul>
                       {items}
                   </ul>
                </div>);
    }
}

const mapStateToProps = state => {
    return {list: state.dummy.list}
}

export default connect(mapStateToProps, null)(View);
