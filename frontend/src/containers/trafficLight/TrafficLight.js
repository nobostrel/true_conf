import React from 'react';
import {
    Route,
    withRouter,
    Switch
} from 'react-router-dom';
import {
    TrafficLightComponent,
} from '../../components/index.js';
import {
    TimerContainer
} from '../index.js';

class TrafficLightContainer extends React.Component {
    state = {
        paths: [{
                path: '/red',
                time: 10
            },
            {
                path: '/yellow',
                time: 3
            },
            {
                path: '/green',
                time: 15
            }
        ],
        reverse: false
    }

    componentDidMount = () => {
        if (window.location.pathname === '/') {
            this.props.history.push('/red');
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        clearTimeout(this.timeToChange);
        if (this.state.reverse) {
            this.reverseChange();
        } else {
            this.standartChange();
        }
    }

    standartChange = () => {
        this.state.paths.forEach((item, index) => {
            if (item.path === this.props.history.location.pathname) {
                if (index < this.state.paths.length - 1) {
                    this.setTime(this.state.paths[index + 1].path, item.time);
                } else {
                    this.setState({
                        reverse: true
                    });
                }
            }
        });
    }

    reverseChange = () => {
        for (let i = this.state.paths.length - 1; i >= 0; i--) {
            if (this.state.paths[i].path === this.props.history.location.pathname) {
                if (i > 0) {
                    this.setTime(this.state.paths[i - 1].path, this.state.paths[i].time);
                } else {
                    this.setState({
                        reverse: false
                    });
                }
            }
        }
    }

    setTime = (path, time) => {
        this.timeToChange = setTimeout(() => {
            this.props.history.push(path);
        }, time * 1000);
    }

    setTimeToComponent = () => {
        let result
        this.state.paths.forEach(item => {
            if (item.path === this.props.history.location.pathname) {
                return result = item.time;
            }
        });
        return result;
    };

    render() {
        return ( <
            div className = "container" >
            <
            Switch >
            <
            Route exact path = "/red"
            render = {
                () =>
                <
                TrafficLightComponent color = 'red' >
                <
                TimerContainer time = {
                    this.setTimeToComponent()
                }
                /> < /
                TrafficLightComponent >
            }
            /> <
            Route exact path = "/yellow"
            render = {
                () =>
                <
                TrafficLightComponent color = 'yellow' >
                <
                TimerContainer time = {
                    this.setTimeToComponent()
                }
                /> < /
                TrafficLightComponent >
            }
            /> <
            Route exact path = "/green"
            render = {
                () =>
                <
                TrafficLightComponent color = 'green' >
                <
                TimerContainer time = {
                    this.setTimeToComponent()
                }
                /> < /
                TrafficLightComponent >
            }
            /> < /
            Switch > <
            /div>
        )
    }
}

export const WithRouterTrafficLightContainer = withRouter(TrafficLightContainer);