import React, { useState } from 'react'

const Work = () => {

    const [count, setCount] = useState(0);
    return (
        <div>

            <p>my name roshan, and my age {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>


        </div>
    )
}

export default Work

