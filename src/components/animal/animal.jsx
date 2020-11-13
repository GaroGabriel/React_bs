import React, { Component } from 'react';


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
                <h3 className='animal__name'>
                    {this.props.name}
                </h3>
            </div>
        )
    }
}


export default Animal;
