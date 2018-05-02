
import React, { Component} from 'react';
import { Icon } from 'react-icons-kit'
import '../styles/scss/App.css';
import {ic_file_download} from 'react-icons-kit/md/ic_file_download'

class Header extends Component {
// Initialize some props
 constructor(props){
     super(props);
 }

  render() {
    return (

        <div class="header">
        <h1 class="zs-logotype">Zensors</h1>
        <div class="header-right-container">
        <ul class="zs-header-menu">
          <li class="header-menu-item">Virtual sensors</li>
          <li class="header-menu-item">Insights</li>
          <li class="header-menu-item">Resources</li>
        </ul>

        <ul class="zs-header-controls">
          <li class="zs-header-control-item">About</li>
          <li class="zs-header-control-item">Support</li>
        </ul>
        </div>




      <ul class="collapse-menu">
      <input type="checkbox" id="collapse"/> 
      <label class="collapse-label" for="collapse"></label>    
             
      <li class="collapse-item first-list-item">icon1</li>
      <li class="collapse-item">icon2</li>
      <li class="collapse-item">icon3</li>
      <li class="collapse-item">icon4</li>
      </ul>
      </div>

    );
  }
}




export default Header;
