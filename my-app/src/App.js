import React, { Component } from 'react';
import './App.css';
import tick from './img/tick.svg';
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
        newItem: '',
        todoItems: [
          {title: 'Play soccer', isComplete: true},
          {title: 'Go to market', isComplete: true},
          {title: 'Do housework'}
        ]
      }

      this.onKeyUp = this.onKeyUp.bind(this);
      this.onChange = this.onChange.bind(this);
  }

  onItemClicked(item){
    return (event) => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0,index),
        {
          ...item,
          isComplete: !isComplete
        },
        ...todoItems.slice(index + 1)
        ]
      });
    };
  }

  onKeyUp(event){
    if(event.keyCode === 13){
    let text = event.target.value;

    if(!text){ return; }
    text = text.trim();
    if(!text){ return; }

    this.setState({
      newItem: '',
      todoItems: [
        { title: text, isComplete: false },
        ...this.state.todoItems
      ]
    });
    }
  }

  onChange(event){
    this.setState({
      newItem: event.target.value
    })
  }

  render(){
    const { todoItems, newItem } = this.state;
    if(todoItems.length){
    return(
      <div className="App">
        <div className="Header">
          <img src={tick} width={32} height={32} />
          <input 
            type="text" 
            placeholder="Add a new item" 
            value={newItem}
            onChange={this.onChange}
            onKeyUp={this.onKeyUp} />
        </div>
        {todoItems.length && todoItems.map((item, index) => 
          <TodoItem 
            key={index} 
            item={item} 
            onClick={this.onItemClicked(item)} />)
        }
      </div>
    );
    }else{
      return(
        <div className="App">Nothing Here!</div>
      );
    }
  }
}

export default App;


/*class App extends Component {
  // constructor(){
  //   super();
  //   this.todoItems = [
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
      //     this.todoItems.length > 0 && this.todoItems.map((item, index) => 
      //     <TodoItem key="index" item={item} />)
      //   }
      //   {
      //     this.todoItems.length === 0 && 'Nothing here!'
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
