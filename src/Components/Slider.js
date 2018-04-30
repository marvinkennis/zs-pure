
import React, { Component} from 'react';
import { Icon } from 'react-icons-kit'
import '../styles/scss/App.css';

class Slider extends Component {
// Initialize some props
 constructor(props){
     super(props);
     this.state = {selectedValue: 50}
 }

 updateValue(value){
   this.setState({selectedValue:value})
 }

  render() {
    return (
      <div>
        <p>Slider label</p>
        <div class="zs-range-container">
          <p>{this.props.minRange}</p>
          <input class="zs-slider" type="range" onchange={(value) => this.updateValue(value)}/>
          <p>{this.props.maxRange}</p>
          <input class="slider-value" type="text" value={this.state.selectedValue}/>
        </div>
      </div>
    );
  }
}


export default Slider;
