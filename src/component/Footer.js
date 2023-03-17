import React, { useEffect, useState } from 'react'


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





            <h2>rollNo:{props.rollNo}</h2>
            <button
                onClick={() => {
                    setState('Some v. important state.');
                }}> Click me</button>
            <p>state: {state}</p>
            <h1>{props.hocsub}</h1>
        </div>
    )
}
export default Footer