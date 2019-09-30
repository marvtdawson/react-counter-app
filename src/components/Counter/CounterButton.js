import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CounterButton.css';

class Counter extends Component {
    render() {
        return (
            <div className="counter">
                <CounterButton by = {1}/>
                <CounterButton by = {5}/>
                <CounterButton by = {10}/>
            </div>
        );
    }
}

class CounterButton extends Component {
    constructor() {
        super();
        this.state = {
            counter : 0
        };
        this.increment =  this.increment.bind(this);
    }

    render() {
        return (
            <div className="counter">
                <button onClick={this.increment}>+{this.props.by}</button>
                <span className="count">
                    {this.state.counter}
                </span>
            </div>
        )
    };

    increment (){
        this.setState({
            counter: this.state.counter + this.props.by
        });
    }

}

CounterButton.defaultProps = {
    by : 1
};

// eslint-disable-next-line no-undef
CounterButton.propTypes = {
    by : PropTypes.number
};

export default Counter;
