import React from 'react';
import ReactDOM from 'react-dom';
import { TrafficLightContainer } from './containers/index.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <TrafficLightContainer />
        </Switch>
    </BrowserRouter>,
    document.querySelector(".root")
);