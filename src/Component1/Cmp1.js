import './Component1css.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

const Cmp1 = () => {
    const [posts, setPosts] = useState([]);
    const apiEndPoint = "https://jsonplaceholder.typicode.com/posts?_limit=10";
    useEffect(() => {
        const getPosts = async () => {
            const { data: res } = await axios.get(apiEndPoint);
            setPosts(res);

        };
        getPosts();
    }, []);



    const addPost = async () => {
        const post = { title: "New Post" };
        await axios.post(apiEndPoint, post);
        setPosts([post, ...posts]);
    };

    const handleUpdate = async post => {
        post.title = 'update title';
        await axios.put(apiEndPoint + '/' + post.id)
        const postsClone = [...posts];
        const index = postsClone.indexOf(post);
        postsClone[index] = { ...post };
        setPosts(postsClone);
        // const article = { title: 'update title' }
        // const res = await axios.put(apiEndPoint, article)
        // setPosts();

    }

    const handleDelet = async post => {
        await axios.delete(apiEndPoint + '/' + post.id + post)
        setPosts(posts.filter((p) => p.id !== post.id));
    }

    // function handleDelet(id) {
    //     axios.delete(`${id}`).then((result) => {
    //         console.log("delete" + result)
    //     })
    // }


    return (
        <>
            <div className="List">
                <h2> there are {posts.length} post in the Database </h2>
                <button onClick={addPost} className="btn btn-primary btn-sm">
                    Add Post
                </button>
                <table className="table">
                    <thead>
                        <tr> <th>Id</th>
                            <th>Title</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post) => (
                            <tr>
                                <td>{post.id}</td>
                                <td> {post.title}</td>
                                <td>
                                    <button onClick={() => handleUpdate(post)} className="btn btn-info btn-sm" > Update </button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelet(post.id)} className="btn btn-danger btn-sm"> Delete</button>

                                </td>
                            </tr>

                        ))}

                    </tbody>
                </table>

            </div>
        </>
    );
};

export default Cmp1