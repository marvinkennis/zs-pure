
import React, { Component} from 'react';
import { Icon } from 'react-icons-kit'
import '../styles/scss/App.css';
import {ic_file_download} from 'react-icons-kit/md/ic_file_download'

class Footer extends Component {
// Initialize some props
 constructor(props){
     super(props);
 }

  render() {
    return (
      <div id="footer">
        <div id="footer-top-bar">
          <h1 class="zs-logotype">Zensors</h1>
          <ul class="zs-footer-menu">
            <li class="footer-menu-item">About</li>
            <li class="footer-menu-item">Support</li>
            <li class="footer-menu-item">Contact</li>
          </ul>
        </div>
        <div id="footer-bottom-bar">
          <p class="copyright-holder">
          2018 - Carnegie Mellon University
          </p> 
        </div>
      </div>
    );
  }
}




export default Footer;
