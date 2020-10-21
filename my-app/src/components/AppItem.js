import React, { Component } from 'react';

class AppItem extends Component {
    constructor(){
        super();
        this.todoList = [
          'play soccer',
          'go to market',
          'do housework'
        ];
        this.table = [
          [],
          [],
          []
        ];
    }
    render () {
        return (
            <div className="AppItem">
                <p>{this.props.title}</p>
            </div>
        );
    }
}

export default AppItem;