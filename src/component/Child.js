import React, { Component } from 'react'

export default class child extends Component {
    componentWillUnmount() {
        alert("child component is removed");
    }
    render() {
        return (
            <div>
                <h1>hello world</h1>
            </div>
        )
    }
}
