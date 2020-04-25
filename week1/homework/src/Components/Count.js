import React, { Component } from 'react'

class Count extends Component {

    render() {
        const feedback = this.props.count > 10 ? "It's higher than 10!" : "Keep counting...";
        
        return (
            <p className="Counter">{feedback} ({this.props.count})</p>
        )
    }
}

export default Count
