import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return(
      <div>
        <nav className="chartNavigation">
          <ul>
            <button><li>Risk</li></button>
            <button><li>Speeding</li></button>
            <button><li>Distractions</li></button>
            <button><li>Fatigue</li></button>
            <button><li>Eco</li></button>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
