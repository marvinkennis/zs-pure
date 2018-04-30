
import React, { Component} from 'react';
import { Icon } from 'react-icons-kit'
import '../styles/scss/App.css';
import {ic_file_download} from 'react-icons-kit/md/ic_file_download'

class TextField extends Component {
// Initialize some props
 constructor(props){
     super(props);
 }

  render() {
    return (
      <button className={"zs-button "+this.props.className}>
        {(this.props.hasIcon) ? <Icon icon={ic_file_download}/>: ''}
        {this.props.labelText}
      </button>
    );
  }
}


export default TextField;
