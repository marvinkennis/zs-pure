import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import logo from '../src/logo.svg';
import Button from '../src/Components/Button'
import Footer from '../src/Components/Footer'
import LineGraph from '../src/Components/LineGraph'
import XYImagePlot from '../src/Components/XYImagePlot'
import SystemMessage from '../src/Components/SystemMessage';
import InlineMessage from '../src/Components/InlineMessage';
import RadioButtonSet from '../src/Components/RadioButtonSet';
import CheckboxSet from '../src/Components/CheckboxSet';
import TextArea from '../src/Components/TextArea';
import TextField from '../src/Components/TextField';
import Slider from '../src/Components/Slider';
import Header from '../src/Components/Header';
import Toggle from '../src/Components/Toggle';
import Cropper from 'react-cropper';


import '../src/styles/scss/App.css';
import '../src/styles/scss/ModuleOverwrites.css';
import BarGraph from '../src/Components/BarGraph';
import Heatmap from '../src/Components/Heatmap';
import ProgressTracker from '../src/Components/ProgressTracker';
import ProgressIndicator from '../src/Components/ProgressIndicator';
import ReactTooltip from 'react-tooltip'
import BrandColors from '../src/Components/BrandColors';
import SupportColors from '../src/Components/SupportColors';
import NeutralColors from '../src/Components/NeutralColors';


storiesOf('Colors', module)
  .add('Brand colors', () => (
    <BrandColors></BrandColors>
  )) 
  .add('Support colors', () => (
    <SupportColors></SupportColors>
  )) 
  .add('Neutral colors', () => (
    <NeutralColors></NeutralColors>
  )) 

storiesOf('Typography', module)
  .add('Headers', () => (
      <div>
    <h1>The quick brown fox jumps over the lazy dog</h1>
    <h2>The quick brown fox jumps over the lazy dog</h2>
    <h3>The quick brown fox jumps over the lazy dog</h3>
    <h4>The quick brown fox jumps over the lazy dog</h4>
    <h5>The quick brown fox jumps over the lazy dog</h5></div>
  )) 
  .add('Paragraphs', () => (
    <p>The earliest known appearance of the phrase is from The Boston Journal. In an article titled "Current Notes" in the February 10, 1885 morning edition, the phrase is mentioned as a good practice sentence for writing students: "A favorite copy set by writing teachers for their pupils is the following, because it contains every letter of the alphabet</p>
  )) 
  .add('Caption', () => (
    <p class="caption">The earliest known appearance of the phrase is from The Boston Journal. In an article titled "Current Notes" in the February 10, 1885 morning edition, the phrase is mentioned as a good practice sentence for writing students: "A favorite copy set by writing teachers for their pupils is the following, because it contains every letter of the alphabet</p>
  )) 
  .add('Legal', () => (
    <p class="legal">The earliest known appearance of the phrase is from The Boston Journal. In an article titled "Current Notes" in the February 10, 1885 morning edition, the phrase is mentioned as a good practice sentence for writing students: "A favorite copy set by writing teachers for their pupils is the following, because it contains every letter of the alphabet</p>
  )) 

storiesOf('Page elements', module)
  .add('Header', () => (
    <Header></Header>
  )) 
  .add('Footer', () => (
    <Footer></Footer>
  )) 

storiesOf('Control elements', module)
  .add('Radio buttons', () => (
    <RadioButtonSet></RadioButtonSet>
  )) 
  .add('Checkbox', () => (
    <CheckboxSet></CheckboxSet>
  )) 

storiesOf('Text inputs', module)
  .add('Text field plain', () => (
    <TextField labelText="Heyooooo" ></TextField>
  )) 

  .add('Text field with info tooltip', () => (
    <TextField labelText="Heyooooo" infoIcon={true} tooltipMessage={true}></TextField>
  )) 

  .add('Text field disabled', () => (
    <TextField readOnly={"true"}></TextField>
  )) 

  .add('Text area', () => (
    <TextArea></TextArea>
  )) 


  storiesOf('System messages', module)
  .add('Inline message', () => (
    <InlineMessage messageType="error" messageText="Placeholder message text here"></InlineMessage>
  )) 

  .add('System warning', () => (
    <SystemMessage messageType="warning" messageText="Warning text placeholder"></SystemMessage>
  )) 

  .add('System error', () => (
    <SystemMessage messageType="error" messageText="Error message here"></SystemMessage>
  )) 

  .add('System confirmation', () => (
    <SystemMessage messageType="confirmation" messageText="Confirmation text placeholder"></SystemMessage>
  )) 

  .add('System information', () => (
    <SystemMessage messageType="information" messageText="Information text placeholder"></SystemMessage>
  )) 


  storiesOf('Buttons', module)
  .add('Primary', () => (
    <Button labelText="Yoooo"></Button>
  )) 

  .add('Primary with icon', () => (
    <Button labelText="Yoooo" hasIcon={true}></Button>
  )) 

  .add('Icon only', () => (
    <Button hasIcon={true}></Button>
  )) 

  .add('Secondary', () => (
    <Button className="button-secondary" labelText="Yoooo"></Button>
  )) 

  .add('Disabled', () => (
    <Button labelText="Yoooo" disabled="btn-disabled"></Button>
  )) 

  storiesOf('Data visualization', module)
  .add('Bar chart', () => (
    <BarGraph></BarGraph>
  )) 

  .add('Line chart', () => (
    <LineGraph></LineGraph>
  )) 

  .add('Point map', () => (
    <XYImagePlot></XYImagePlot>
  )) 

storiesOf('Query tools', module)
  .add('Region selector', () => (
    <Cropper
    src='https://coworker.imgix.net/photos/vietnam/ho-chi-minh-city/circo-coworking-space/main-1488017339.jpg'
    style={{height: 400, width: 600}}
    // Cropper.js options
    aspectRatio={16 / 9}
    guides={false}
    crop={console.log('true')} />
  )) 




  
  
  


  