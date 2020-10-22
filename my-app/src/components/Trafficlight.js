import React, { Component } from 'react';
import classnames from 'classnames';

import './Trafficlight.css'

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class Trafficlight extends Component{
    render(){
        const { currentColor } = this.props;
        return(
            <div className="Trafficlight">
                <div className={classnames('bulb', 'red', 
                    {active: currentColor === RED}
                )} />
                <div className={classnames('bulb', 'orange', 
                    {active: currentColor === ORANGE}
                )} />
                <div className={classnames('bulb', 'green', 
                    {active: currentColor === GREEN}
                )} />
            </div>
        );
    }
}

export default Trafficlight;