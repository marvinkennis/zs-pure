
import React, { Component} from 'react';
import { Icon } from 'react-icons-kit'
import '../styles/scss/App.css';
import {ic_file_download} from 'react-icons-kit/md/ic_file_download'

class ProgressTracker extends Component {
// Initialize some props
 constructor(props){
     super(props);
 }

  render() {
    return (
          <div>
                    <ul class="progress vertical">
          <li data-step ="1" class="active">Step 1</li>
          <li data-step ="2">Step 2</li>
          <li data-step ="3">Step 3</li>
        </ul>
          <div class="zs-progress-tracker">

          <ul>
            <li><input type="checkbox" disabled="disabled" class="progress-bulb"/>About</li>
            <li><input type="checkbox" disabled="disabled" class="progress-bulb"/>Support</li>
            <li><input type="checkbox" disabled="disabled" class="progress-bulb"/>Contact</li>
          </ul>
          </div>
          </div>

    );
  }
}




export default ProgressTracker;
