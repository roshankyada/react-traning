
import React, { Component } from 'react'
import './Component1css.css'
import axios from 'axios';

class ComponentAxios extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }
    render() {
        return (
            <div className='List'>

            </div>
        )
    }
}

export default ComponentAxios