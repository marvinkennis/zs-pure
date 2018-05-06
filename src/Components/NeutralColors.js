
import React, {Component} from 'react';
import {curveCatmullRom} from 'd3-shape';
import '../styles/scss/App.css';
import '../styles/scss/ModuleOverwrites.css';


import {
  RadialChart,
  Hint
}  from 'react-vis';
class NeutralColors extends Component {
  state = {
    value: false,
    paletteLabel: ['Neutral-01', 'Neutral-02', 'Neutral-03', 'Neutral-04', 'Neutral-05'],
    myPalette: ['#FFFFFF', '#E9E9E9', '#767676', '#434343', '#000000']
  }

  constructTooltip(v) {
    var colorIndex = parseInt(v.color);
    return {name: this.state.paletteLabel[colorIndex],
            code: this.state.myPalette[colorIndex]};
  }

  render() {
    const {value} = this.state;
    return (
      <RadialChart
        className={'donut-chart-example'}
        innerRadius={100}
        radius={140}
        colorDomain={[0, 1, 2, 3, 4]}
        colorRange={this.state.myPalette}
        getAngle={d => d.theta}
        data={[
          {theta: 2},
          {theta: 2},
          {theta: 2},
          {theta: 2},
          {theta: 2},


        ]}
        onValueMouseOver={v => this.setState({value: this.constructTooltip(v)})}
        onSeriesMouseOut={v => this.setState({value: false})}
        width={300}
        height={300}>
        {value && <Hint value={value}/>}
      </RadialChart>
    );
  }
}


export default NeutralColors