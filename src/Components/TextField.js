
import React, { Component} from 'react';
import { Icon } from 'react-icons-kit'
import '../styles/scss/App.css';
import {ic_info} from 'react-icons-kit/md/ic_info'
import ReactTooltip from 'react-tooltip'

class TextField extends Component {
// Initialize some props
 constructor(props){
     super(props);
     this.state = {buttonIconStyle:{paddingTop:100, textAlign: 'center', display:'inline', marginRight:100}}
 }

 GenerateLabel = (props) => {
  const labelText = props.labelText;
  const tooltipMessage = props.tooltipMessage;
  if (labelText) {
    return (
    <div>
    <label class="zs-input-label" >{labelText} {props.tooltipMessage ? <span class="info-icon special-text"><Icon style={this.state.buttonIconStyle} data-tip="hello world" icon={ic_info}/>      <span class="special-text__tooltip">
        Example of a tooltip with text in pure CSS
      </span></span> : <div></div>}</label> 
    </div>)
  }
  return false
}
  render() {

    return (
      <div style={{paddingTop: 75+'px'}}>
        <this.GenerateLabel labelText={this.props.labelText} tooltipMessage={this.props.tooltipMessage}/>
        <input type="text" class="zs-text-box" readOnly={this.props.readOnly} disabled={this.props.readOnly}></input>
      </div>
    );
  }
}


export default TextField;
