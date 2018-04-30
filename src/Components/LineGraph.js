
import React, {Component} from 'react';
import {curveCatmullRom} from 'd3-shape';
import '../styles/scss/App.css';
import '../styles/scss/ModuleOverwrites.css';


import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries
}  from 'react-vis';
class LineGraph extends React.Component {
  render() {
    return (
      <XYPlot
        width={600}
        height={300}>
        <HorizontalGridLines />
        <XAxis title="X Axis" position="start"/>
        <LineSeries
          className="fourth-series"
          curve={curveCatmullRom.alpha(0.5)}
          data={[
            {x: 1, y: 7},
            {x: 2, y: 11},
            {x: 3, y: 9},
            {x: 4, y: 2}
          ]}/>

          <LineSeries
          className="fourth-series"
          curve={curveCatmullRom.alpha(0.5)}
          data={[
            {x: 1, y: 9},
            {x: 2, y: 2},
            {x: 3, y: 11},
            {x: 4, y: 7},
            

          ]}/>

          
      </XYPlot>
    );
  }
}


export default LineGraph