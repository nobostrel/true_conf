import React from 'react';
import './TrafficLight.css';

export const TrafficLightComponent = props => {
    return (
        <div className="wrapper">
            <div className="circle" style={
                {
                    backgroundColor: 'red',
                    opacity: props.color === 'red' ? 1 : 0.1
                }
            } ></div>
            <div className="circle" style={
                {
                    backgroundColor: 'yellow',
                    opacity: props.color === 'yellow' ? 1 : 0.1
                }
            } ></div>
            <div className="circle" style={
                {
                    backgroundColor: 'green',
                    opacity: props.color === 'green' ? 1 : 0.1
                }
            } ></div>
        </div>
    )
}