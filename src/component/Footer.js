import React, { useEffect, useState } from 'react'
import Child from "./Child";

const Footer = (props) => {



    const [state, setState] = useState(null);



    useEffect(() => {
        console.log('[Footer.js] useEffect');

        return () => {
            console.log('[Footer.js] cleanup work in useEffect'); // cleanup work here
        };
    }, [])



    return (

        <div>
            <Child />




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