
import React, { Component} from 'react';
import { Icon } from 'react-icons-kit'
import '../styles/scss/App.css';
import {ic_file_download} from 'react-icons-kit/md/ic_file_download'

class Button extends Component {
// Initialize some props
 constructor(props){
     super(props);
 }

  render() {
    return (
      <label class={"zs-toggle-switch " + this.props.disabled}>
        <input type="checkbox" disabled={this.props.disabled}/>
        <span class="zs-toggle-slider round"></span>
      </label>
    );
  }
}


export default Button;
