
import React, {Component} from 'react';
import '../styles/scss/App.css';

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  MarkSeries
}  from 'react-vis';


//children is whatever 
console.log(this.props)
class XYImagePlot extends Component {
  // Initialize some props
   constructor(props){
       super(props);
   }
  //daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  render() {return(  
  <div>
  <XYPlot
    width={600}
    height={300}>
    <MarkSeries
      className="mark-series-example"
      strokeWidth={2}
      opacity="0.8"
      sizeRange={[5, 15]}
      data={[
        {x: 1, y: 10, size: 30},
        {x: 1.7, y: 12, size: 10},
        {x: 2, y: 5, size: 1},
        {x: 3, y: 15, size: 12},
        {x: 2.5, y: 7, size: 4}
      ]}/>
  </XYPlot>
  <img src=""/>
  </div>)
}
}
export default XYImagePlot