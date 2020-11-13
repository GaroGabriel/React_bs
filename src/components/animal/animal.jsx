import React, { Component } from 'react';
import './animal.css'


class Animal extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='animal'>
                <div className='animal__image'>
                    <img src={this.props.img} alt={this.props.name} />
                </div>
                <span className='animal__name'>
                    {this.props.name}
                </span>
            </div>
        )
    }
}


export default Animal;
