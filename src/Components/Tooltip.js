
import React, { Component} from 'react';
import { Icon } from 'react-icons-kit'
import '../styles/scss/App.css';
import {ic_file_download} from 'react-icons-kit/md/ic_file_download'
import ReactTooltip from 'react-tooltip'

class Tooltip extends Component {
// Initialize some props
 constructor(props){
     super(props);
 }

  render() {
    return (
    <div>
    <p data-tip="hello world">Tooltip</p>
    <ReactTooltip class='zs-tooltip'/>
    
    </div>
    );
  }
}


export default Tooltip;
