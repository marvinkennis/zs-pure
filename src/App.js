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
import TextField from './Components/TextField';
import Slider from './Components/Slider';
import Header from './Components/Header';
import Toggle from './Components/Toggle';
import Cropper from 'react-cropper';


import './styles/scss/App.css';
import './styles/scss/ModuleOverwrites.css';
import BarGraph from './Components/BarGraph';
import Heatmap from './Components/Heatmap';
import ProgressTracker from './Components/ProgressTracker';
import ProgressIndicator from './Components/ProgressIndicator';
import ReactTooltip from 'react-tooltip'

class App extends Component {
  render() {
    return (
      
      <div className="App">
      <h1>The quick brown fox jumps over the lazy dog</h1>
      <h2>The quick brown fox jumps over the lazy dog</h2>
      <h3>The quick brown fox jumps over the lazy dog</h3>
      <h4>The quick brown fox jumps over the lazy dog</h4>
      <h5>The quick brown fox jumps over the lazy dog</h5>
      <p>The earliest known appearance of the phrase is from The Boston Journal. In an article titled "Current Notes" in the February 10, 1885 morning edition, the phrase is mentioned as a good practice sentence for writing students: "A favorite copy set by writing teachers for their pupils is the following, because it contains every letter of the alphabet</p>
      <p class="caption">Here is some example caption text</p>
      <p class="legal">Here is some example legal text</p>
      <Button labelText="Yoooo"></Button>
      <Button labelText="Yoooo" hasIcon={true}></Button>
      <Button hasIcon={true}></Button>
      <Button className="button-secondary" labelText="Yoooo"></Button>
      <Button labelText="Yoooo" disabled="btn-disabled"></Button>
      <Header></Header>
      <Slider minRange={0} maxRange={100}></Slider>
      <ProgressIndicator></ProgressIndicator>
      <RadioButtonSet></RadioButtonSet>
      <CheckboxSet></CheckboxSet>
      <TextArea></TextArea>
      <TextField readOnly={"true"}></TextField>
      <TextField labelText="Heyooooo" infoIcon={true} tooltipMessage={true}></TextField>
      <Toggle></Toggle>
      <Toggle disabled="disabled"></Toggle>
      <SystemMessage messageType="warning" messageText="Yo warning here"></SystemMessage>
      <SystemMessage messageType="confirmation" messageText="Yo warning here"></SystemMessage>
      <SystemMessage messageType="error" messageText="Yo warning here"></SystemMessage>
      <InlineMessage messageType="error" messageText="Placeholder message text here"></InlineMessage>
      <Footer>
      </Footer>
      <BarGraph></BarGraph>
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
