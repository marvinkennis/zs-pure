
import React, { Component} from 'react';
import { Icon } from 'react-icons-kit'
import '../styles/scss/App.css';
import '../styles/scss/ModuleOverwrites.css';
import {ic_file_download} from 'react-icons-kit/md/ic_file_download'

import {XYPlot, XAxis, YAxis, ContourSeries, MarkSeriesCanvas, Borders} from 'react-vis';



class Heatmap extends Component {
  state = {
    data: [
      {x: 10, y: 7},
      {x: 2, y: 11},
      {x: 3, y: 90},
      {x: 40, y: 2},
      {x: 1, y: 7},
      {x: 2, y: 11},
      {x: 3, y: 9},
      {x: 40, y: 2},
      {x: 1, y: 70},
      {x: 2, y: 11},
      {x: 3, y: 9},
      {x: 40, y: 2},
      {x: 1, y: 7},
      {x: 20, y: 11},
      {x: 3, y: 9},
      {x: 40, y: 2},
      {x: 1, y: 7},
      {x: 2, y: 11},
      {x: 30, y: 9},
      {x: 4, y: 20},
      {x: 1, y: 7},
      {x: 2, y: 11},
      {x: 30, y: 9},
      {x: 4, y: 20},
    ]
  }
  render() {
    const {data} = this.state;
    return (
      <div>
        <XYPlot
          xDomain={[40, 100]}
          yDomain={[1.5, 8]}
          width={600}
          getX={d => d.waiting}
          getY={d => d.eruptions}
          height={300}>
          <ContourSeries
            animation
            className="contour-series-example"
            style={{
              stroke: '#125C77',
              strokeLinejoin: 'round'
            }}
            colorRange={[
              '#79C7E3',
              '#FF9833'
            ]}
            data={data}/>
          <MarkSeriesCanvas animation data={data} size={1} color={'#125C77'}/>
          <Borders style={{all: {fill: '#fff'}}}/>
          <XAxis />
          <YAxis />

        </XYPlot>
      </div>
    );
  }
}

export default Heatmap;
