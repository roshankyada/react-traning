
// import React, { Component } from 'react'
// import './Component1css.css'
// import axios from 'axios';

// class Cmp2 extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             posts: [],
//             error: ''
//         }
//     }

//     componentDidMount() {
//         axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10")
//             .then(response => {
//                 this.setState({ posts: response.data })
//                 console.log(response);
//             })
//             .catch(error => {
//                 this.setState({ error: 'URl Error' })
//                 console.log(error);
//             })
//     }
//     render() {
//         const { posts, error } = this.state
//         return (
//             <div className='List'>
//                 {
//                     posts.length ?
//                         posts.map(post => <div key={post.id}>{post.id}</div>) : null
//                 }
//                 {
//                     error ? <div>{error}</div> : null
//                 }

//             </div>
//         )
//     }
// }

// export default Cmp2


// src/components/NewPost/NewPost.js
import React, { Component } from 'react';
import axios from 'axios';
import './Component1css.css'



class Cmp2 extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
    };

    // POST
    postDataHandler = () => {
        const { title, content, author } = this.state;
        const post = {
            title,
            content,
            author,
        };
        axios
            .post('https://jsonplaceholder.typicode.com/posts', post)
            .then((response) => {
                console.log('response: ', response);
            });
    };

    render() {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.setState({ title: event.target.value })}
                />
                <label>Content</label>
                <textarea
                    rows="4"
                    value={this.state.content}
                    onChange={(event) => this.setState({ content: event.target.value })}
                />
                <label>Author</label>
                <select
                    value={this.state.author}
                    onChange={(event) => this.setState({ author: event.target.value })}
                >
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default Cmp2;