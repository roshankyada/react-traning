import React from 'react'
import HOC from './HOC';
import './my-style.css';

function B(props) {
    const { count, increment, name } = props

    return (
        <div>
            <button className="btn btn-warning" onMouseOver={increment}>{name}.click {count}</button>
        </div>
    )
}

export default HOC(B, 5);