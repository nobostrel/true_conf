import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { TrafficLightComponent } from '../../components/index.js';

export class TrafficLightContainer extends React.Component {


    render() {
        return (
            <div className="container">
                <TrafficLightComponent loc={this.props.location.pathname} />
            </div>
        )
    }
}