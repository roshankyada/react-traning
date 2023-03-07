import React, { useState } from 'react'

const Work = () => {

    const [count, setCount] = useState(0);
    const styles = {
        background: 'green',
        font: 'inherit',
        border: '1px solid black',
        padding: '8 px',
        borderRadius: '7px',
        boxShadow: '0 4px 5px #ccc',
    };

    return (
        <div>

            <p>my name roshan, and my age {count}</p>
            <button onClick={() => setCount(count + 1)} style={styles} >
                Click me
            </button>


        </div>
    )
}

export default Work

