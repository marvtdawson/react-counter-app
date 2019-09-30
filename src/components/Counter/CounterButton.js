import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CounterButton.css';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter : 0
        };
        this.increment =  this.increment.bind(this);
        this.decrement =  this.decrement.bind(this);
        this.reset =  this.reset.bind(this);
    }

    render() {
        return (
            <div className="counter">
                <CounterButton by = {1} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
                <CounterButton by = {5} incrementMethod = {this.increment} decrementMethod = {this.decrement} />
                <CounterButton by = {10} incrementMethod = {this.increment} decrementMethod = {this.decrement} />
                <span className="count">
                    {this.state.counter}
                </span>
                <div>
                    <button onClick={this.reset} className="reset">Reset</button>
                </div>

            </div>
        );
    }

    reset() {
        this.setState( (preState) =>
            {
                return {counter: 0}
            }
        );
    }

    increment (by){
        // console.log(`increment from parent - ${by}`);
        this.setState( (prevState) =>
            {
                return {counter: prevState.counter + by}
            }
        );
    }

    decrement (by){
        // console.log(`increment from parent - ${by}`);
        this.setState( (prevState) =>
            {
                return {counter: prevState.counter - by}
            }
        );
    }
}

class CounterButton extends Component {
    constructor() {
        super();
        // this.state = {
        //     counter : 0
        // };
        // this.increment =  this.increment.bind(this);
        // this.decrement = this.decrement.bind(this);
    }

    render() {
        return (
            <div className="counter">
                <button onClick={ () => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            </div>
        )
    };

    // increment (){
    //     this.setState({
    //         counter: this.state.counter + this.props.by
    //     });
    //     this.props.incrementMethod(this.props.by);
    // }
    //
    // decrement (){
    //     this.setState({
    //         counter: this.state.counter - this.props.by
    //     });
    //     this.props.decrementMethod(this.props.by);
    // }

}

CounterButton.defaultProps = {
    by : 1
};

// eslint-disable-next-line no-undef
CounterButton.propTypes = {
    by : PropTypes.number
};

export default Counter;
