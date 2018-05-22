import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Chart from './components/Chart/Chart';
import './App.css';
import json from './data/data.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {
        //chart x-axis labels
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Alexanders Risk Alerts',
            data: [],
            backgroundColor: 'rgba(198, 245, 227, 0.7)',
            borderColor: 'rgba(0, 0, 0, 0)',
            pointBackgroundColor: 'rgba(0, 0, 0, 0)'
          },
          {
            label: 'Fleets Risk Alerts',
            data: [],
            backgroundColor: 'rgb(172, 205, 244)',
            borderColor: 'rgba(0, 0, 0, 0)',
            pointBackgroundColor: 'rgba(0, 0, 0, 0)'
          }
        ],
        options: {
          // chart display options
          legend: {
            display: true
          },
          elements: {
            line: {
              tension: 0
            }
          },
          scales: {
            yAxes: [{
              ticks: {
                max: 25,
                min: 0,
                stepSize: 5
              }
            }],
            xAxes: [{
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
              }
            }]
          },

        }
      }
    }
  }

  componentWillMount() {
    // console.log(json.user);
    let datasets = this.state.chartData.datasets;
    const user = json.user.map(getUser => {
      datasets[0]['data'] = [...datasets[0]['data'], getUser.risk];
      //mapping 'user' risk data from json
      // console.log(getUser.risk);
    })
    const fleet = json.fleet.map(getFleet => {
      datasets[1]['data'] = [...datasets[1]['data'], getFleet.risk];
      //mapping 'fleet' risk data from json
      // console.log(getFleet.risk);
    })
    this.setState({
      chartData: {
        ...this.state.chartData,
        datasets : datasets
        //setting array data for 1st and 2nd 'data' in state
      }
    })
    // console.log(this.state);
  }

  render() {
    return (
      <div>
        <Chart chartData={this.state.chartData} legendPosition="top" options={this.state.chartData.options}/>
      </div>
    );
  }
}

export default App;
