
import React, { Component} from 'react';
import { Icon } from 'react-icons-kit'
import '../styles/scss/App.css';
import {ic_warning} from 'react-icons-kit/md/ic_warning'
import {ic_close} from 'react-icons-kit/md/ic_close'
import {withCross} from 'react-icons-kit/entypo/withCross'
import {ic_info} from 'react-icons-kit/md/ic_info'
import {infoCircle} from 'react-icons-kit/fa/infoCircle'
import {ic_check_circle} from 'react-icons-kit/md/ic_check_circle'

class SystemMessage extends Component {
// Initialize some props
 constructor(props){
     super(props);
     this.state = {buttonIconStyle:{paddingTop:100, textAlign: 'center', display:'inline'}}
 }

  render() {
    var icon;

    if (this.props.messageType === "warning") {
      icon = ic_warning;
    } else if (this.props.messageType === "error") {
      icon = withCross;
    } else if (this.props.messageType === "confirmation") {
      icon = ic_check_circle;
    } else if (this.props.messageType === "information") {
      icon = infoCircle;
    }


    return (
      <div class={"zs-system-message "+ this.props.messageType}>
        <div class={"zs-system-message-icon "+ this.props.messageType+"-icon"}><Icon style={this.state.buttonIconStyle} size={24} icon={icon}/></div>
        <p>{this.props.messageText}</p>
        <div class="zs-system-close-icon"><Icon size={20} icon={ic_close}/></div>
      </div>
    );
  }
}


export default SystemMessage;
