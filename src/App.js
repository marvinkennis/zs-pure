import React, { Component } from 'react';
import logo from './logo.svg';
import Button from './Components/Button'
import Footer from './Components/Footer'
import LineGraph from './Components/LineGraph'
import XYImagePlot from './Components/XYImagePlot'
import SystemMessage from './Components/SystemMessage';
import InlineMessage from './Components/InlineMessage';
import RadioButtonSet from './Components/RadioButtonSet';
import CheckboxSet from './Components/CheckboxSet';
import TextArea from './Components/TextArea';
import Slider from './Components/Slider';
import Toggle from './Components/Toggle';
import Cropper from 'react-cropper';


import './styles/scss/App.css';
import './styles/scss/ModuleOverwrites.css';

class App extends Component {
  render() {
    return (
      
      <div className="App">
      
      <Button labelText="Yoooo"></Button>
      <Button labelText="Yoooo" hasIcon={true}></Button>
      <Button className="button-secondary" labelText="Yoooo"></Button>
      <Button labelText="Yoooo"></Button>
      <Slider minRange={0} maxRange={100}></Slider>
      <RadioButtonSet></RadioButtonSet>
      <CheckboxSet></CheckboxSet>
      <TextArea></TextArea>
      <Toggle></Toggle>
      <SystemMessage messageType="warning" messageText="Yo warning here"></SystemMessage>
      <InlineMessage messageType="error" messageText="Placeholder message text here"></InlineMessage>
      <Footer>
      </Footer>
      <LineGraph></LineGraph>
      <XYImagePlot></XYImagePlot>
      <Cropper
        ref='cropper'
        src='https://coworker.imgix.net/photos/vietnam/ho-chi-minh-city/circo-coworking-space/main-1488017339.jpg'
        style={{height: 400, width: 600}}
        // Cropper.js options
        aspectRatio={16 / 9}
        guides={false}
        crop={console.log('true')} />
      </div>
    );
  }
}

export default App;
