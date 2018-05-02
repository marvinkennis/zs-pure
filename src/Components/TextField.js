
import React, { Component} from 'react';
import { Icon } from 'react-icons-kit'
import '../styles/scss/App.css';
import {ic_info} from 'react-icons-kit/md/ic_info'
import ReactTooltip from 'react-tooltip'

class TextField extends Component {
// Initialize some props
 constructor(props){
     super(props);
 }

 GenerateLabel = (props) => {
  const labelText = props.labelText;
  const tooltipMessage = props.tooltipMessage;
  if (labelText) {
    return (
    <div>
    <label class="zs-input-label" >{labelText} {props.tooltipMessage ? <span class="info-icon"><Icon data-tip="hello world" icon={ic_info}/><ReactTooltip class='zs-tooltip'/></span> : <div></div>}</label> 
    </div>)
  }
  return false
}
  render() {

    return (
      <div>
        <this.GenerateLabel labelText={this.props.labelText} tooltipMessage={this.props.tooltipMessage}/>
        <input type="text" class="zs-text-box"></input>
      </div>
    );
  }
}


export default TextField;
