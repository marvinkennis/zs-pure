
import React, {Component} from 'react';
import {curveCatmullRom} from 'd3-shape';
import '../styles/scss/App.css';
import '../styles/scss/ModuleOverwrites.css';


import {
  RadialChart,
  Hint
}  from 'react-vis';
class BrandColors extends Component {
  state = {
    value: false,
    paletteLabel: ['Brand-01', 'Brand-02', 'Brand-03'],
    myPalette: ['#2DEDD0', '#42B3B9', '#424496']
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
        colorDomain={[0, 1, 2]}
        colorRange={this.state.myPalette}
        getAngle={d => d.theta}
        data={[
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


export default BrandColors