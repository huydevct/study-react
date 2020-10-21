import React, { Component } from 'react';
import './App.css';
import AppItem from './components/AppItem';
import Table from './components/Table';

class App extends Component {
  constructor(){
    super();
    this.todoList = [
      'play soccer',
      'go to market',
      'do housework'
    ];
  }
  render() {
    return(
      <div className="App">
        <Table />
      </div>
    )
  }
}

export default App;
