/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import './App.css';

import Accordion from './components/Accordion';

class App extends Component {
  render(){
    return(
      <div className="App">
        <Accordion heading="Heading">
          Cao Thanh Huy
        </Accordion>
      </div>
    );
  }
}

export default App;
