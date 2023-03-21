
import React, { Component } from 'react'
import './Component1css.css'
import axios from 'axios';

class Cmp2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            error: ''
        }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10")
            .then(response => {
                this.setState({ posts: response.data })
                console.log(response);
            })
            .catch(error => {
                this.setState({ error: 'URl Error' })
                console.log(error);
            })
    }
    render() {
        const { posts, error } = this.state
        return (
            <div className='List'>
                {
                    posts.length ?
                        posts.map(post => <div key={post.id}>{post.id}</div>) : null
                }
                {
                    error ? <div>{error}</div> : null
                }
            </div>
        )
    }
}

export default Cmp2
