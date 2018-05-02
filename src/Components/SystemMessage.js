
import React, { Component} from 'react';
import { Icon } from 'react-icons-kit'
import '../styles/scss/App.css';
import {ic_file_download} from 'react-icons-kit/md/ic_file_download'
import {ic_warning} from 'react-icons-kit/md/ic_warning'
import {ic_close} from 'react-icons-kit/md/ic_close'

class SystemMessage extends Component {
// Initialize some props
 constructor(props){
     super(props);
     this.state = {buttonIconStyle:{paddingTop:100, textAlign: 'center', display:'inline'}}
 }

  render() {
    return (
      <div class={"zs-system-message "+ this.props.messageType}>
        <div class={"zs-system-message-icon "+ this.props.messageType+"-icon"}><Icon style={this.state.buttonIconStyle} size={24} icon={ic_warning}/></div>
        <p>{this.props.messageText}</p>
        <div class="zs-system-close-icon"><Icon size={20} icon={ic_close}/></div>
      </div>
    );
  }
}


export default SystemMessage;
