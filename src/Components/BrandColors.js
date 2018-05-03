
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
    myPalette: ['#2DEDD0', '#424496', '#42B3B9']
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
        onValueMouseOver={v => this.setState({value: v})}
        onSeriesMouseOut={v => this.setState({value: false})}
        width={300}
        height={300}>
        {value && <Hint value={value}/>}
      </RadialChart>
    );
  }
}


export default BrandColors