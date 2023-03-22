import './Component1css.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

const Cmp1 = () => {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts?_limit=10',)
            .then((response) => {
                setPosts(response.data)
                console.log(response.data)

            })
            .catch((err) => {
                console.log(err);
            });
    }, []);



    return (
        <div className='List'>
            {posts.map(allData => (<div>
                <div key={allData.title}>{allData.title}</div>
                <div key={allData.id}>{allData.id}</div>

            </div>
            ))}
        </div>
    );
};
export default Cmp1