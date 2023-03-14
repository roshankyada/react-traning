import React, { useEffect, useState } from 'react'

const Footer = (props) => {

    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        console.log('Footer.Js useEffect', count);

    }, [count])

    useEffect(() => {
        alert('hello', props.rollNo)
        console.log('useEffect props.rollno:', props.rollNo);
    }, [props.rollNo])


    return (
        <div>
            <h1>count:{count}</h1>
            <h1>calculation:{calculation}</h1>
            <button onClick={() => setCount(count + 1)}>count+1</button>
            <button onClick={() => setCalculation(calculation + 1)}>calculation+1</button>
            <h2>rollNo:{props.rollNo}</h2>

        </div>
    )
}
export default Footer;