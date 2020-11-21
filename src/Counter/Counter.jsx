import React, { Component } from 'react';
import './counter.css'

class Counter extends Component {


    state = {
        count: 0,
    }

    render() {
        return (
            <div className='counter__wrapper'>
                <div className='counter__header'>
                    <span>Counter</span>
                </div>
                <div className='counter'>
                    <button>-</button>
                    <span>{this.state.count}</span>
                    <button>+</button>
                </div>
            </div>
        )
    }
}

export default Counter;