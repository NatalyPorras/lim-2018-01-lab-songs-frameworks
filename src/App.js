import React, { Component } from 'react';
import Slider from './container/slider';
import './App.css';
class App extends Component {

  render() {   

    return (
      <div>
        <header>
          <h3>
           Ranking Songs
          </h3>
        </header>
       <Slider />
      </div>
    );
  }
}

export default App;
