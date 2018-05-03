
import React, { Component} from 'react';
import { Icon } from 'react-icons-kit'
import '../styles/scss/App.css';
import {ic_file_download} from 'react-icons-kit/md/ic_file_download'
import {ic_warning} from 'react-icons-kit/md/ic_warning'
import {ic_close} from 'react-icons-kit/md/ic_close'
import {ic_error} from 'react-icons-kit/md/ic_error'

class InlineMessage extends Component {
// Initialize some props
 constructor(props){
     super(props);
     this.state = {buttonIconStyle:{paddingTop:100, textAlign: 'center', display:'inline', marginRight:5}}
 }

  render() {
    return (
      <div>
      <label class="input-field-label">Text input label</label>
      <div class={"zs-system-message short-message "+ this.props.messageType}>
        <p>{this.props.messageText}</p>
      </div>

      <div class="zs-error-underline">
        <span class="inline-icon error-icon"><Icon style={this.state.buttonIconStyle} icon={ic_error}/></span>
        <p class="error-msg-text">error message</p>
      </div>
      </div>
    );
  }
}


export default InlineMessage;
