import React, { Component } from 'react';
import './counter.css'

class Counter extends Component {
    constructor() {
        super()
        this.clickPlus = this.clickPlus.bind(this)
        this.clickMinus = this.clickMinus.bind(this)
        this.restBtn = this.restBtn.bind(this)
    }

    state = {
        count: 0,
    }


    clickMinus = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    clickPlus = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    restBtn = () => {
        this.setState({
            count: this.state.count = 0
        })
    }

    render() {
        return (
            <div className='counter__wrapper'>
                <div className='counter__header'>
                    <span>Counter</span>
                </div>
                <div className='counter'>
                    <button onClick={this.clickMinus}>-</button>
                    <span>{this.state.count}</span>
                    <button onClick={this.clickPlus}>+</button>
                </div>
                <div className='counter__rest'>
                    <button onClick={this.restBtn}>Rest</button>
                </div>
            </div>
        )
    }
}

export default Counter;