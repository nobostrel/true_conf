import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { TrafficLightComponent } from '../../components/index.js';

class TrafficLightContainer extends React.Component {
    state = {
        paths: [
            {
                path: '/red',
                time: 2000
            },
            {
                path: '/yellow',
                time: 2000
            },
            {
                path: '/green',
                time: 2000
            }
        ],
        reverse: false
    }

    componentDidMount() {
        if (window.location.pathname === '/') this.props.history.push('/red');
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            if (!this.state.reverse) {
                this.standartChange();
            } else {
                this.reverseChange();
            }
        }
    }

    standartChange = () => {
        for (let i = 0; i < this.state.paths.length; i++) {
            if (this.state.paths[i].path === this.props.history.location.pathname) {
                if (i < this.state.paths.length - 1) {
                    this.setTimer(this.state.paths[i + 1].path, this.state.paths[i].time);
                } else if (i + 1 >= this.state.paths.length - 1) {
                    this.setState(() => { reverse: true });
                }
            }
        }
    }

    reverseChange = () => {
        for (let i = this.state.paths.length - 1; i <= 0; i--) {
            if (this.state.paths[i].path === this.props.history.location.pathname) {
                if (i > 0) {
                    this.setTimer(this.state.paths[i - 1].path, this.state.paths[i].time);
                } else {
                    this.setState(() => { reverse: false });
                }
            }
        }
    }

    setTimer = (path, time) => {
        setTimeout(() => {
            this.props.history.push(path);
        }, time);
    }


    render() {
        return (
            <div className="container">
                <Route path="/red" render={() => <TrafficLightComponent color='red' />} />
                <Route path="/yellow" render={() => <TrafficLightComponent color='yellow' />} />
                <Route path="/green" render={() => <TrafficLightComponent color='green' />} />
            </div>
        )
    }
}

export const WithRouterTrafficLightContainer = withRouter(TrafficLightContainer);