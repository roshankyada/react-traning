import React from 'react'
import HOC from './HOC';
import './mainComponent.css';

function B(props) {
    const { count, increment, name } = props

    return (
        <div className='B'>
            <button className="btn btn-warning" onMouseOver={increment}>{name}.click {count}</button>
        </div>
    )
}

export default HOC(B, 5);