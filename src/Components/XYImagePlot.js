
import React, {Component} from 'react';
import '../styles/scss/App.css';

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  CustomSVGSeries
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
        width={600}
        height={300}>


        <CustomSVGSeries
          className="custom-marking"
          customComponent={(row, positionInPixels) => {
            return (
              //COde this into a for loop... 
              <g className="inner-inner-component">
                <circle cx="140" cy="200" r={row.size || 10} fill="lightseagreen" opacity='0.9'/>
                <circle cx="130" cy="210" r={row.size || 10} fill="mediumslateblue" opacity='0.9'/>
                <circle cx="140" cy="215" r={row.size || 10} fill="lightseagreen" opacity='0.9'/>
                <circle cx="135" cy="205" r={row.size || 10} fill="orange" opacity='0.9'/>
                <circle cx="135" cy="191" r={row.size || 10} fill="lightseagreen" opacity='0.9'/>
                <circle cx="132" cy="201" r={row.size || 10} fill="mediumslateblue" opacity='0.9'/>
                <circle cx="139" cy="207" r={row.size || 10} fill="orange" opacity='0.9'/>
                <circle cx="137" cy="185" r={row.size || 10} fill="lightseagreen" opacity='0.9'/>
                <circle cx="141" cy="190" r={row.size || 10} fill="mediumslateblue" opacity='0.9'/>
                <circle cx="129" cy="220" r={row.size || 10} fill="orange" opacity='0.9'/>
                <circle cx="130" cy="207" r={row.size || 10} fill="mediumslateblue" opacity='0.9'/>
                <circle cx="133" cy="216" r={row.size || 10} fill="lightseagreen" opacity='0.9'/>

                <circle cx="310" cy="200" r={row.size || 10} fill="orange" opacity='0.9'/>
                <circle cx="340" cy="210" r={row.size || 10} fill="lightseagreen" opacity='0.9'/>
                <circle cx="310" cy="215" r={row.size || 10} fill="mediumslateblue" opacity='0.9'/>
                <circle cx="335" cy="205" r={row.size || 10} fill="orange" opacity='0.9'/>
                <circle cx="285" cy="191" r={row.size || 10} fill="lightseagreen" opacity='0.9'/>
                <circle cx="302" cy="201" r={row.size || 10} fill="mediumslateblue" opacity='0.9'/>
                <circle cx="309" cy="207" r={row.size || 10} fill="orange" opacity='0.9'/>
                <circle cx="307" cy="185" r={row.size || 10} fill="lightseagreen" opacity='0.9'/>
                <circle cx="321" cy="190" r={row.size || 10} fill="mediumslateblue" opacity='0.9'/>
                <circle cx="289" cy="220" r={row.size || 10} fill="lightseagreen" opacity='0.9'/>
                <circle cx="290" cy="207" r={row.size || 10} fill="mediumslateblue" opacity='0.9'/>
                <circle cx="303" cy="216" r={row.size || 10} fill="lightseagreen" opacity='0.9'/>

                <circle cx="485" cy="151" r={row.size || 10} fill="lightseagreen" opacity='0.9'/>
                <circle cx="502" cy="161" r={row.size || 10} fill="mediumslateblue" opacity='0.9'/>
                <circle cx="509" cy="167" r={row.size || 10} fill="orange" opacity='0.9'/>
                <circle cx="507" cy="145" r={row.size || 10} fill="lightseagreen" opacity='0.9'/>
                <circle cx="521" cy="150" r={row.size || 10} fill="mediumslateblue" opacity='0.9'/>
                <circle cx="489" cy="180" r={row.size || 10} fill="lightseagreen" opacity='0.9'/>
                <circle cx="490" cy="167" r={row.size || 10} fill="mediumslateblue" opacity='0.9'/>
                <circle cx="503" cy="150" r={row.size || 10} fill="lightseagreen" opacity='0.9'/>
              </g>
            );
          }}
          data={[
            {x: 1, y: 3, size: 3,style: {stroke: 'red', fill: 'orange'}},
            {x: 1, y: 1, size: 20, style: {stroke: 'red', fill: 'orange'}},
            {x: 2, y: 5,style: {stroke: 'red', fill: 'orange'}},
            {x: 1, y: 1,style: {stroke: 'red', fill: 'orange'}},
            {x: 1, y: 7,style: {stroke: 'red', fill: 'orange'}}
          ]}/>
      </XYPlot>
  <img class="zs-graph-background" src="https://coworker.imgix.net/photos/vietnam/ho-chi-minh-city/circo-coworking-space/main-1488017339.jpg"/>
  </div>
 
  </div>)
}
}
export default XYImagePlot