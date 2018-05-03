
import React, { Component} from 'react';
import { Icon } from 'react-icons-kit'
import '../styles/scss/App.css';
import '../styles/css/RadioButtonSet.css';


class ProgressTrackerVV extends Component {
// Initialize some props
 constructor(props){
     super(props);
 }

  render() {
    return (
      <div>
      <div class="container">
    
      <ul>
      <li>
      <div class="next-bridge filled"></div>
        <input type="radio" id="f-option"  checked="checked" class="complete-option" disabled="disabled" name="selector1"/>
        <label for="f-option">Label 1</label>
        <div class="check-complete"></div>
      </li>
      
      <li>
      <div class="next-bridge"></div>
        <input type="radio" id="s-option" checked="checked" disabled="disabled" name="selector2"/>
        <label for="s-option">Label 2</label>
        
        <div class="check"><div class="inside"></div></div>
      
      </li>
      
      <li>
        <input type="radio" id="t-option" disabled="disabled"  name="selector"/>
        <label for="t-option">Label 3</label>
        
        <div class="check"><div class="inside"></div></div>
      </li>
    </ul>
    </div>
    </div>
    );
  }
}


export default ProgressTrackerVV;
