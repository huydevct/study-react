import React, { Component } from 'react';

class AppItem extends Component {
    render () {
        return (
            <div className="AppItem">
                <p>{this.props.title}</p>
            </div>
        );
    }
}

export default AppItem;