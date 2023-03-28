import React from 'react'
import './mainComponent.css'
import HOC from './HOC';
//import demoContext from './DemoContext';
//import { useContext } from 'react'
function A(props) {
    const { count, increment, name } = props
    return (
        <div className='A'>

            <button className="btn btn-primary" onClick={increment}>{name}.click {count}</button>

        </div>
    )
}

export default HOC(A, 10,)  