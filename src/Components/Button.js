
import React, { Component} from 'react';
import { Icon } from 'react-icons-kit'
import '../styles/scss/App.css';
import {ic_file_download} from 'react-icons-kit/md/ic_file_download'

class Button extends Component {
// Initialize some props
 constructor(props){
     super(props);
     this.state = {buttonIconStyle:{paddingTop:100, textAlign: 'center', display:'inline'}}
 }
 
  render() {
    return (
      <button className={"zs-button "+this.props.className+" "+this.props.disabled} disabled={this.props.disabled}>
        {(this.props.hasIcon) ? <Icon icon={ic_file_download} style={this.state.buttonIconStyle}/>: ''}
        {this.props.labelText}
      </button>
    );
  }
}


export default Button;
