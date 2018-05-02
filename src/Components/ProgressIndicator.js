
import React, { Component} from 'react';
import { Icon } from 'react-icons-kit'
import '../styles/scss/App.css';
import '../styles/css/RadioButtonSet.css';
import {ic_file_download} from 'react-icons-kit/md/ic_file_download'

class ProgressIndicator extends Component {
// Initialize some props
 constructor(props){
     super(props);
 }

  render() {
    return (
      <div>
      <div class="container">
    
      <ul class="progress-v2">
      <li>
        <input type="radio" id="f-option" name="selector"/>
        <label for="f-option">Label 1</label>
        
        <div class="check"></div>
      </li>
      
      <li>
        <input type="radio" id="s-option" name="selector"/>
        <label for="s-option">Label 2</label>
        
        <div class="check"><div class="inside"></div></div>
      </li>
      
      <li>
        <input type="radio" id="t-option" name="selector"/>
        <label for="t-option">Label 3</label>
        
        <div class="check"><div class="inside"></div></div>
      </li>
    </ul>
    </div>
    </div>
    );
  }
}


export default ProgressIndicator;
