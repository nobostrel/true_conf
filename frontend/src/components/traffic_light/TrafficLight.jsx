import React from 'react';
import './TrafficLight.css';

export const TrafficLightComponent = props => {
    return (
        <div className="wrapper">
            <div className="circle" style={
                {
                    backgroundColor: 'red',
                    opacity: props.loc === '/red' ? 1 : 0.1
                }
            } ></div>
            <div className="circle" style={{
                backgroundColor: 'yellow',
                opacity: props.loc === '/yellow' ? 1 : 0.1
            }} ></div>
            <div className="circle" style={{
                backgroundColor: 'green',
                opacity: props.loc === '/red' ? 1 : 0.1
            }} ></div>
        </div>
    )
}