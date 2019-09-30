import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter : 0
        };
        this.increment =  this.increment.bind(this);
    }

    render() {
        const style = {fontSize: "1.6rem", padding: "1.5rem 3rem"};
        return (
            <div className="counter">
                <button onClick={this.increment}>+1</button>
                <span className="count" style={style}>{this.state.counter}</span>
            </div>
        )
    };

    increment (){
    this.setState({
        counter: this.state.counter + 1
    });
}

}

export default Counter;
