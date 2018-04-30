
import React, { Component} from 'react';
import { Icon } from 'react-icons-kit'
import '../styles/scss/App.css';
import 'https://cdn.jsdelivr.net/npm/simpleheat@0.4.0/simpleheat.js'
import {ic_file_download} from 'react-icons-kit/md/ic_file_download'
var ReactHeatmap = require('react-heatmap');
class Heatmap extends Component {
// Initialize some props
 constructor(props){
     super(props);
 }


  render() {

    var data = [[38,20,2],[38,690,3],[38,690,3],[38,690,3],[38,690,3],[38,690,3],[38,690,3],[38,690,3],[38,690,3],[38,690,3],[38,690,3],[38,690,3],[48,30,1]];
          // set data of [[x, y, value], ...] format
      heat.data(data);

      // set max data value (1 by default)
      heat.max(max);

      // add a data point
      heat.add(point);

      // clear data
      heat.clear();
    return (
      <div>

      <canvas id="canvas" width="1000" height="600"></canvas>
      </div>
    );
  }
}


export default Heatmap;
