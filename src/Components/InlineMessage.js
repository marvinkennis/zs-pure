
import React, { Component} from 'react';
import { Icon } from 'react-icons-kit'
import '../styles/scss/App.css';
import {ic_file_download} from 'react-icons-kit/md/ic_file_download'
import {ic_warning} from 'react-icons-kit/md/ic_warning'
import {ic_close} from 'react-icons-kit/md/ic_close'

class InlineMessage extends Component {
// Initialize some props
 constructor(props){
     super(props);
 }

  render() {
    return (
      <div>
      <label>Text input label</label>
      <div class={"zs-system-message short-message "+ this.props.messageType}>
        <p>{this.props.messageText}</p>
      </div>

      <div class="zs-error-underline">
        <p>error message</p>
      </div>
      </div>
    );
  }
}


export default InlineMessage;
