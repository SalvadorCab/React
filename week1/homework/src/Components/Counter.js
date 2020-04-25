import React, { Component } from 'react'

import Button from './Button';
import Count from './Count';

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0  
        }
    }

    setCount = () => {
        this.setState({ count : this.state.count + 1 });
        console.log(this.state.count);
    }

    render() {
        return (
            <div>
                <Button counter={this.setCount} />
                <Count count={this.state.count} />
            </div>
        )
    }
}

export default Counter
