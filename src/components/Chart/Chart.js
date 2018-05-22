import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import Navbar from '../Navbar/Navbar';
import './Chart.css';

class Chart extends Component {
  render() {
    return(
      <div className="container">
        <div className="innerContainer">
          <Navbar />
          <div className="visualsContainer">
            <div className="chart">
              <Line
                data={this.props.chartData}
                options={this.props.options}
                />
              </div>
              <div className="info">
                <p>Alexanders risk alerts have increased by 8% in the last 6 months.<br /><br />
                   He is a low risk driver compared to the Kent Division. He is in the top 20% of his fleet.</p>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chart;
