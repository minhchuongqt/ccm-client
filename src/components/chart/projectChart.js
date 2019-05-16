import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CanvasJSReact from './canvasjs.react';
const  CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
class ProjectChart extends Component {
  render() {
    const options = {
			theme: "light2",
			animationEnabled: true,
			exportEnabled: true,
			title:{
				// text: "Sprint 1 Chart"
			},
			axisY:{
				// title: "Stock In Hand",
				includeZero: false
      },
      axisX: {
        interlacedColor: "#f2f2f2",
      },
			data: [
        {
				type: "stepLine",
				xValueFormatString: "MMM DD YYYY, HH:MM",
        markerSize: 5,
        
				dataPoints: [
					{ x: new Date("2019- 01- 01"), y: 20 },
					{ x: new Date("2019- 01- 02"), y: 18 },
					{ x: new Date("2019- 01- 03"), y: 15 },
					{ x: new Date("2019- 01- 04"), y: 14 },
					{ x: new Date("2019- 01- 05"), y: 12 },
					{ x: new Date("2019- 01- 08"), y: 9 },
					{ x: new Date("2019- 01- 09"), y: 7 },
					{ x: new Date("2019- 01- 10"), y: 4 },
					{ x: new Date("2019- 01- 11"), y: 2 },
					{ x: new Date("2019- 01- 12"), y: 0 }
				]
      },
      {
        lineColor: "red",
				type: "stepLine",
				xValueFormatString: "MMM DD YYYY, HH:MM",
        markerSize: 5,
        
				dataPoints: [
					{ x: new Date("2019- 01- 01"), y: 0 },
					{ x: new Date("2019- 01- 02"), y: 2 },
					{ x: new Date("2019- 01- 03"), y: 5 },
					{ x: new Date("2019- 01- 04"), y: 6 },
					{ x: new Date("2019- 01- 05"), y: 8 },
					{ x: new Date("2019- 01- 08"), y: 11 },
					{ x: new Date("2019- 01- 09"), y: 13 },
					{ x: new Date("2019- 01- 10"), y: 16 },
					{ x: new Date("2019- 01- 11"), y: 18 },
					{ x: new Date("2019- 01- 12"), y: 20 }
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
  }
}

ProjectChart.propTypes = {

};

export default ProjectChart;