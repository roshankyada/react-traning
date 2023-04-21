import React from 'react'
import { useSelector } from 'react-redux'
import './Redux.css'

const Shop = () => {
    const amount = useSelector(state => state.amount)
    return (
        <div className='shop'>
            <div >
                <button className='btn btn-primary'>Your balance : {amount}</button>
            </div>
            <div>
                <h2>Shop!!</h2>
                <button className='btn btn-primary ma-2 '>-</button>
                <span className='m-2'>Add BALANCE</span>
                <button className='btn btn-primary ma-2 '>+</button>
            </div>
        </div>
    )
}

export default Shop