
import React, {Component} from 'react';
import {curveCatmullRom} from 'd3-shape';
import '../styles/scss/App.css';
import '../styles/scss/ModuleOverwrites.css';


import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas
}  from 'react-vis';

class BarGraph extends React.Component {
  state = {
    useCanvas: false
  }

  render() {
    const {useCanvas} = this.state;
    const content = useCanvas ? 'TOGGLE TO SVG' : 'TOGGLE TO CANVAS';
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
    return (
      <div>
 
        <XYPlot
          xType="ordinal"
          width={600}
          height={300}
          xDistance={100}
          >
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <BarSeries
            className="vertical-bar-series-example"
            data={[
              {x: 'A', y: 10},
              {x: 'B', y: 5},
              {x: 'C', y: 15}
            ]}/>
          <BarSeries
            data={[
              {x: 'A', y: 12},
              {x: 'B', y: 2},
              {x: 'C', y: 11}
            ]}/>
        </XYPlot>
      </div>
    );
  }
}

export default BarGraph