
import React, { Component} from 'react';
import { Icon } from 'react-icons-kit'
import '../styles/scss/App.css';
import '../styles/css/CheckboxSet.css';


class CheckboxSet extends Component {
// Initialize some props
 constructor(props){
     super(props);
 }

  render() {
    return (
    <div class="container">

    <div class="zensors-checkbox">
        <input type="checkbox" value="1" id="checkboxInput" name="" />
        <label for="checkboxInput"></label>
    </div>

    <span class="checkbox-label">Checkbox</span>


    </div>
    );
  }
}


export default CheckboxSet;
