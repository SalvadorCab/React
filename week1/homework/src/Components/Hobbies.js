import React, { Component } from 'react'

class Hobbies extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             hobby: props.hobby
        }
    }
    

    render() {

        return (
        <li>{ this.state.hobby }</li>
        )
    }
}

export default Hobbies
