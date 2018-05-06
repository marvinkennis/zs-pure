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

    <p>
        H600 <br/>
        font-size: 36px (2.25em) <br/>
        font-weight: light (300) <br/>
        line-height: 45px (1.25)
    </p>

    <br/><br/>

    <h2>The quick brown fox jumps over the lazy dog</h2>

    <p>
        H500 <br/>
        font-size: 24px (1.5em) <br/>
        font-weight: light (300) <br/>
        line-height: 30px (1.25)
    </p>

    <br/><br/>


    <h3>The quick brown fox jumps over the lazy dog</h3>

    <p>
        H400 <br/>
        font-size: 20px (1.25em) <br/>
        font-weight: light (300) <br/>
        line-height: 25px (1.25)
    </p>

    <br/><br/>


    <h4>The quick brown fox jumps over the lazy dog</h4>

    <p>
        H300 <br/>
        font-size: 18px (1.125em) <br/>
        font-weight: regular (400) <br/>
        line-height: 23px (1.25)
    </p>

    <br/><br/>


    <h5>The quick brown fox jumps over the lazy dog</h5>

    <p>
        H200 <br/>
        font-size: 14px (0.875em) <br/>
        font-weight: regular (400) <br/>
        line-height: 18px (1.25)
    </p>

    <br/><br/>


    <h6>The quick brown fox jumps over the lazy dog</h6>

    <p>
        H100 <br/>
        font-size: 14px (0.75em) <br/>
        font-weight: regular (400) <br/>
        line-height: 16px (1.25)
    </p>

    <br/><br/>

  </div>
  )) 
  .add('Paragraph', () => (
    <div>
    <p>The earliest known appearance of the phrase is from The Boston Journal. In an article titled "Current Notes" in the February 10, 1885 morning edition, the phrase is mentioned as a good practice sentence for writing students: "A favorite copy set by writing teachers for their pupils is the following, because it contains every letter of the alphabet</p>
  

    <br/>

    <p> p <br/>
        font-size: 14px (0.875em) <br/>
        font-weight: regular (400) <br/>
        line-height: 21px (1.5) <br/>
    </p>
    </div>
  )) 
  .add('Caption', () => (
    <div>
    <p class="caption">The earliest known appearance of the phrase is from The Boston Journal. In an article titled "Current Notes" in the February 10, 1885 morning edition, the phrase is mentioned as a good practice sentence for writing students: "A favorite copy set by writing teachers for their pupils is the following, because it contains every letter of the alphabet</p>
  

    <br/>

    <p> Caption <br/>
        font-size: 12px (0.75em) <br/>
        font-weight: regular (400) <br/>
        line-height: 28px (1.5) <br/>
    </p>
    </div>
  )) 
  .add('Legal', () => (
    <div>
    <p class="legal">The earliest known appearance of the phrase is from The Boston Journal. In an article titled "Current Notes" in the February 10, 1885 morning edition, the phrase is mentioned as a good practice sentence for writing students: "A favorite copy set by writing teachers for their pupils is the following, because it contains every letter of the alphabet</p>

    <br/>

    <p> Legal <br/>
        font-size: 11px (0.6875em) <br/>
        font-weight: regular (400) <br/>
        line-height: 17px (1.5) <br/>
    </p>
    </div>
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
    <TextField labelText="Text field label" ></TextField>
  )) 

  .add('Text field with info tooltip', () => (
    <TextField labelText="Text field label" infoIcon={true} tooltipMessage={true}></TextField>
  )) 

  .add('Text field disabled', () => (
    <TextField labelText="Disabled text field" readOnly={true}></TextField>
  )) 

  .add('Text area', () => (
    <TextArea labelText="Text area label"></TextArea>
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
    <Button labelText="Button text"></Button>
  )) 

  .add('Primary with icon', () => (
    <Button labelText="Button text" hasIcon={true}></Button>
  )) 

  .add('Icon only', () => (
    <Button hasIcon={true}></Button>
  )) 

  .add('Secondary', () => (
    <Button className="button-secondary" labelText="Button text"></Button>
  )) 

  .add('Disabled', () => (
    <Button labelText="Disabled button" disabled="btn-disabled"></Button>
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




  
  
  


  