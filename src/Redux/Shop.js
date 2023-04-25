import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decNumber, incNumber } from './actions'
import './Redux.css'



const Shop = () => {
    const dispatch = useDispatch()
    const changeTheNumber = useSelector((State) => State.rootReducer.changeTheNumber);
    console.log({ changeTheNumber })
    return (
        <div className='shop'>
            <div >
                <button className='btn btn-primary'>Your balance : {changeTheNumber}</button>

            </div>
            <div>
                <h2>Shop!!</h2>
                <button className='btn btn-primary ma-2 ' onClick={() => dispatch(decNumber(2))} >-</button>
                <span className='m-2'>Add BALANCE</span>
                <button className='btn btn-primary ma-2 ' onClick={() => dispatch(incNumber(5))} >+</button>
            </div>
        </div>
    )
}

export default Shop