
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
                const posts = response.data.slice(0, 4);
                const updatePosts = posts.map((post) => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                })
                this.setState({ posts: updatePosts }) //response.data
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

                    posts.map(post => <div key={post.id}>{post.id}{post.author}</div>)
                }
                {
                    error ? <div>{error}</div> : null
                }

            </div>
        )
    }
}

export default Cmp2



// import React, { Component } from 'react'

// class Cmp2 extends Component {

//     state = {
//         books: []
//     }

//     fetchBooks = () => {
//         fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
//             .then((response) => response.json())
//             .then(booksList => {
//                 this.setState({ books: booksList });
//             });
//     }

//     render() {
//         return (
//             <>
//                 <button onClick={this.fetchBooks}>Load Books</button>
//                 {(
//                     <ul>
//                         {this.state.books.map((book) => (
//                             <li key={book.id}>{book.id}:- {book.title}</li>
//                         ))}
//                     </ul>
//                 )}

//             </>
//         )
//     }
// }
//export default Cmp2 