import React, { Component } from 'react';


class Animal extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='animal'>
                <div className='animal__image'>
                    <img src="" alt="" />
                </div>
                <h3 className='animal__name'>

                </h3>
            </div>
        )
    }
}


export default Animal;
