
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
    myPalette: ['#000000', '#434343', '#767676', '#E9E9E9', '#FFFFFF']
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
        onValueMouseOver={v => this.setState({value: v})}
        onSeriesMouseOut={v => this.setState({value: false})}
        width={300}
        height={300}>
        {value && <Hint value={value}/>}
      </RadialChart>
    );
  }
}


export default NeutralColors