
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
          <h2 class="zs-logotype">Zensors</h2>
          <ul class="zs-footer-menu">
            <li class="footer-menu-item">About</li>
            <li class="footer-menu-item">Support</li>
            <li class="footer-menu-item">Contact</li>
          </ul>
        </div>
        <div id="footer-bottom-bar">
          <div class="copyright-holder">
            <p class="legal"> 2018 - Carnegie Mellon University</p>
          </div> 

          <ul class="zs-legal-menu">
            <li class="footer-menu-item legal">Privacy</li>
            <li class="footer-menu-item legal">Terms and conditions</li>
          </ul>
        </div>
      </div>
    );
  }
}




export default Footer;
