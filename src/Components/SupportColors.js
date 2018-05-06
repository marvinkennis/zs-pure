
import React, {Component} from 'react';
import {curveCatmullRom} from 'd3-shape';
import '../styles/scss/App.css';
import '../styles/scss/ModuleOverwrites.css';


import {
  RadialChart,
  Hint
}  from 'react-vis';
class SupportColors extends Component {
  state = {
    value: false,
    paletteLabel: ['Support-01', 'Support-02', 'Support-03', 'UI-01', 'UI-02'],
    myPalette: ['#FF5230', '#FFAB00', '#00B583', '#6FA9FF', '#6470E7']
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


export default SupportColors