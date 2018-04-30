import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/scss/App.css';
import Button from './Components/Button'
import Footer from './Components/Footer'
import LineGraph from './Components/LineGraph'
import XYImagePlot from './Components/XYImagePlot'

class App extends Component {
  render() {
    return (
      
      <div className="App">
      <Button labelText="Yoooo"></Button>
      <Button labelText="Yoooo" hasIcon={true}></Button>
      <Button className="button-secondary" labelText="Yoooo"></Button>
      <Button labelText="Yoooo"></Button>

      <Footer>
      </Footer>
      <LineGraph></LineGraph>
      <XYImagePlot></XYImagePlot>
      </div>
    );
  }
}

export default App;
