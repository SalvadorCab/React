import React, { Component } from 'react'

class Guarantee extends Component {

    render() {

        return (
            <div className="ImageContainer">
                <img src={this.props.img} alt="" />
                <p className="TitleImage">{this.props.title}</p>
                <p className="DescriptionImage">{this.props.description}</p>
            </div>
        )
    }
}

export default Guarantee

