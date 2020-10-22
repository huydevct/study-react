import React, { Component } from 'react';
import './App.css';
// import logo from './logo.svg';
import AppItem from './components/AppItem';
import Table from './components/Table';
import TodoItem from './components/TodoItem';
import Trafficlight from './components/Trafficlight';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class App extends Component {
  constructor(){
      super();
      this.state = {
        todoList: [
          {title: 'Play soccer', isComplete: true},
          {title: 'Go to market', isComplete: true},
          {title: 'Do housework'}
        ]
      }
    }

  

  render(){
    const { todoList } = this.state;
    return(
      <div className="App">
        {
          todoList.length > 0 && todoList.map((item, index) => 
          <TodoItem key="index" item={item}  />)
        }
        {
          todoList.length === 0 && 'Nothing here!'
        }
      </div>
    );
  }
}

export default App;
/*class App extends Component {
  // constructor(){
  //   super();
  //   this.todoList = [
  //     {title: 'Play soccer', isComplete: true},
  //     {title: 'Go to market', isComplete: true},
  //     {title: 'Do housework'}
  //   ];
  // }

  constructor(){
    super();
    this.state = {
        currentColor: GREEN
    };

    setInterval(() => {
        this.setState({
            currentColor: this.getNextColor(this.state.currentColor)
        });
    }, 1000);
  }

  getNextColor(color){
    switch(color){
        case RED:
            return ORANGE;
        case ORANGE:
            return GREEN;
        case GREEN:
            return RED;
    }
  }

  render() {
    const { currentColor } = this.state;
    return(
      // <div className="App">
      //   {
      //     this.todoList.length > 0 && this.todoList.map((item, index) => 
      //     <TodoItem key="index" item={item} />)
      //   }
      //   {
      //     this.todoList.length === 0 && 'Nothing here!'
      //   }
      // </div>
      
      <div className="App">
        <Trafficlight currentColor={currentColor} />
      </div>
    )
  }
}

export default App;*/

/*class App extends Component {
  constructor(props) {
     super(props);
     this.state = {
        currentColor: 0,
        option: [
           {
              name: "red",
              value: 0,
              delay: 60000
           },
           {
              name: "yellow",
              value: 1,
              delay: 5000
           },
           {
              name: "green",
              value: 2,
              delay: 30000
           },
        ],
     };

     setInterval(() => {
        this.setState({
           currentColor: this.getNextColor(this.state.currentColor)
        });
     }, this.timeLine(this.state.currentColor));
  }

  getNextColor = (color) => {
     const { option } = this.state;
     switch (color) {
        case 0: return option[1].name;
        case 1: return option[2].name;
        default: return option[0].name;
     }
  }

  timeLine = (seconds) => {
     const { option } = this.state;
     switch (seconds) {
        case 0: return option[0].delay;
        case 1: return option[1].delay;
        default: return option[2].delay;
     }
  }

  render() {
     return (
        <div className="App">
           <Trafficlight active={this.state.currentColor} option={this.state.option} />
        </div>
     );
  }
}

export default App;*/
