import React, { Component } from 'react'
import Hobbies from "./Hobbies"

class HobbyList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hobbies : ["Surfing", "Rock climbing", "Mountain biking", "Breakdancing"]  
        }
    }

    render() {
        const { hobbies } = this.state;

        // The key value here is to avoid a Warning asking for a different key value for each children of 
        // the Parent Component....whatever that means.
        return (
            <div>
                <h3>Hobbies: </h3>
                <ul>
                    { hobbies.map((element, index) => <Hobbies hobby={ element } key={ index }/>) }
                </ul>
            </div>
        )
    }
}

export default HobbyList


