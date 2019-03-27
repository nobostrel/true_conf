import React from 'react';
import ReactDOM from 'react-dom';
import { WithRouterTrafficLightContainer } from './containers/index.js';
import { HashRouter } from 'react-router-dom';
import './index.css';

ReactDOM.render(
    <HashRouter >
        <WithRouterTrafficLightContainer />
    </HashRouter>,
    document.querySelector(".root")
);