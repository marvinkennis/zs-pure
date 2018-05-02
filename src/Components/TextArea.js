
import React, { Component} from 'react';
import { Icon } from 'react-icons-kit'
import '../styles/scss/App.css';
import {ic_info} from 'react-icons-kit/md/ic_info'
import ReactTooltip from 'react-tooltip'

class TextArea extends Component {
// Initialize some props
 constructor(props){
     super(props);
     this.state = {buttonIconStyle:{paddingTop:100, textAlign: 'center', display:'inline'}}
 }

 GenerateLabel = (props) => {
  const labelText = props.labelText;
  const tooltipMessage = props.tooltipMessage;
  if (labelText) {
    return (
    <div>
    <label class="zs-input-label" >{labelText} {props.tooltipMessage ? <span style={{color:"FF0000"}}><Icon style={this.state.buttonIconStyle} data-tip="hello world" icon={ic_info}/><ReactTooltip styleName="tooltip" type="light"/></span> : <div></div>}</label> 
    </div>)
  }
  return false
}

  render() {
    return (
      <div>
        <this.GenerateLabel labelText={this.props.labelText} tooltipMessage={this.props.tooltipMessage}/>
        <textarea class="zs-text-box" rows="4" cols="50">
          Fuck this 
        </textarea>
      </div>
    );
  }
}


export default TextArea;
