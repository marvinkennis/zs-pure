
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
  <h2>Occupancy Cluster Map 07/01/2018 — 07/03/2018</h2>
  <p>Camera 2 - Second Floor Lounge</p> 
  <div class="zs-image-graph-bg">
  <XYPlot
    colorRange={['#2CECCF', '#2CECCF']}
    width={600}
    height={300}>
    <MarkSeries
      className="mark-series-example"
      opacity="1"
      sizeRange={[5, 15]}
      data={[
        {x: 4, y: 5, size: 30, color:1},
        {x: 8, y: 1, size: 10},
        {x: 7, y: 3, size: 10},
        {x: 2, y: 5, size: 10},
        {x: 2, y: 5, size: 10},
        {x: 2, y: 5, size: 10},
        {x: 2, y: 5, size: 10},
        {x: 5, y: 2, size: 10},
        {x: 2, y: 5, size: 10},
        {x: 3, y: 15, size: 12},
        {x: 2.5, y: 7, size: 4}
      ]}/>
  </XYPlot>
  <img class="zs-graph-background" src="https://coworker.imgix.net/photos/vietnam/ho-chi-minh-city/circo-coworking-space/main-1488017339.jpg"/>
  </div>
 
  </div>)
}
}
export default XYImagePlot