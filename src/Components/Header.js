
import React, { Component} from 'react';
import { Icon } from 'react-icons-kit'
import '../styles/scss/App.css';
import {ic_power_settings_new} from 'react-icons-kit/md/ic_power_settings_new'
import {ic_settings} from 'react-icons-kit/md/ic_settings'
import {cog} from 'react-icons-kit/entypo/cog'
import {power} from 'react-icons-kit/typicons/power'

class Header extends Component {
// Initialize some props
 constructor(props){
     super(props);
     this.state = {stylesh:{paddingTop:100, textAlign: 'center', display:'inline', marginRight:7}}
 }
 
  render() {
    
    return (

      <div>
      <div id="main-header">
        <div id="logo-container"><h2>ZENSORS</h2></div> 
        <div id="header-right-container">
        <div id="header-menu">
          <ul>
          <li><span class="inset-hover-border">Virtual sensors</span></li>
           <li><span class="inset-hover-border">Insights</span></li>
           <li><span class="inset-hover-border">Resources</span></li>
           </ul>
           </div>
          <div id="header-controls"> 
          <ul>
          <li><span class="information-icon"><Icon style={this.state.stylesh} icon={cog} /></span>Settings</li>
           <li><span class="information-icon"><Icon style={this.state.stylesh} icon={ic_power_settings_new}/> </span>Log out</li>
           </ul>
          </div>

          
        </div>
      </div> 

      </div>
      

    );
  }
}




export default Header;
