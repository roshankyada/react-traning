import React, { useEffect, useState } from 'react'

const Footer = (props) => {

    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
    const [state, setState] = useState(null);



    useEffect(() => {
        console.log('[Footer.js] useEffect');

        return () => {
            console.log('[Footer.js] cleanup work in useEffect'); // cleanup work here
        };
    }, [])


    // useEffect(() => {
    //     console.log('I am the effect');
    //     return () => {
    //         console.log('I run after re-render, but before the next useEffect');
    //     };
    // });

    return (
        <div>
            <h1>count:{count}</h1>
            <h1>calculation:{calculation}</h1>
            <button onClick={() => setCount(count + 1)}>count+1</button>
            <button onClick={() => setCalculation(calculation + 1)}>calculation+1</button>
            <h2>rollNo:{props.rollNo}</h2>
            <button
                onClick={() => {
                    setState('Some v. important state.');
                }}> Click me</button>
            <p>state: {state}</p>
        </div>
    )
}
export default Footer;