import React, { Component } from 'react';
import Slider from './container/slider';
import './App.css';
class App extends Component {

  render() {   

    return (
      <div className="principal">
        <header>
          <h3>
            Learn React
          </h3>
        </header>
       <Slider />
      </div>
    );
  }
}

export default App;
