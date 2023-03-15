import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    shouldComponentUpdate() {
        console.log('[child.js]shouldComponentUpdate', this.state.count);
        if (this.state.count >= 5 && this.state.count <= 10) {
            return true;
        } else {
            return false
        }
    }
    render() {
        return (
            <div>
                <h3>should component update {this.state.count}</h3>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>^update^</button>
            </div>

        )
    }
}
