import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { TrafficLightComponent } from '../../components/index.js';

class TrafficLightContainer extends React.Component {
    state = {
        paths: [
            {
                path: '/red',
                time: 10000
            },
            {
                path: '/yellow',
                time: 3000
            },
            {
                path: '/green',
                time: 15000
            }
        ],
        reverse: false
    }

    componentDidMount = () => {
        if (window.location.pathname === '/')
            this.props.history.push('/red');
    }

    componentDidUpdate = () => {
        console.log('sdf')
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
                    this.setState({ reverse: true });
                }
            }
        });
    }

    reverseChange = () => {
        for (let i = this.state.paths.length - 1; i >= 0; i--) {
            if (this.state.paths[i].path === this.props.history.location.pathname) {
                if (i > 0) {
                    console.log('1')
                    this.setTime(this.state.paths[i - 1].path, this.state.paths[i].time);
                } else {
                    this.setState({ reverse: false });
                }
            }
        }
    }

    setTime = (path, time) => {
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