
import React, {Component} from 'react';
import {curveCatmullRom} from 'd3-shape';
import '../styles/scss/App.css';


import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries
}  from 'react-vis';


//children is whatever 
console.log(this.props)
const LineGraph = (props) => {
  //daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  return(      <XYPlot
    width={700}
    height={300}>
    <HorizontalGridLines />
   
    <XAxis tickFormat={v => `Weekday ${v}`} tickLabelAngle={-40} />
    <LineSeries
      className="Floor 1"
      curve={curveCatmullRom.alpha(0.5)}
      data={[
        {x: 1, y: 7},
        {x: 2, y: 11},
        {x: 3, y: 9},
        {x: 4, y: 2},
        {x: 5, y: 11},
        {x: 6, y: 9},
        {x: 7, y: 2}
      ]}/>

      <LineSeries
      className="Floor 2"
      curve={curveCatmullRom.alpha(0.5)}
      data={[
        {x: 1, y: 2},
        {x: 2, y: 6},
        {x: 3, y: 4},
        {x: 4, y: 3},
        {x: 5, y: 1},
        {x: 6, y: 8},
        {x: 7, y: 11}
      ]}/>

          <LineSeries
      className="Floor 3"
      curve={curveCatmullRom.alpha(0.5)}
      data={[
        {x: 1, y: 10},
        {x: 2, y: 4},
        {x: 3, y: 2},
        {x: 4, y: 9},
        {x: 5, y: 6},
        {x: 6, y: 3},
        {x: 7, y: 5}
      ]}/>
  </XYPlot>)
}



export default LineGraph