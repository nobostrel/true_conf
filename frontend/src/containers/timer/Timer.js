import React, {
    Component
} from 'react';
import {
    TimerComponent
} from '../../components/index.js';

export class TimerContainer extends Component {
    state = {
        time: null
    }

    componentDidMount = () => {
        this.setState({
            time: this.props.time
        }, () => {
            this.interval();
        });
    }

    componentWillReceiveProps = nextProps => {
        this.setState({
            time: nextProps.time
        }, () => {
            clearInterval(this.int);
            this.interval();
        });
    }

    interval = () => {
        this.int = setInterval(() => {
            this.setState({
                time: this.state.time - 1
            });
        }, 1000);
    }

    render() {
        return ( <
            TimerComponent timer = {
                this.state.time
            }
            />
        )
    }
}