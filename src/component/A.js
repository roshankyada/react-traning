import React from 'react'
import HOC from './HOC';
function A(props) {
    const { count, increment, name } = props
    return (
        <div>
            <button className="btn btn-primary" onClick={increment}>{name}.click {count}</button>

        </div>
    )
}

export default HOC(A, 10,)