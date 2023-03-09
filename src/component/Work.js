// import React, { useState } from 'react'
// import './my-style.css';
// import Radium from 'radium';

// const Work = () => {

//     const [count, setCount] = useState(0);
//     const styles = {
//         ':hover': {
//             background: 'green',
//             font: 'inherit',
//             border: '1px solid black',
//             padding: '8 px',
//             borderRadius: '7px',
//             boxShadow: '0 4px 5px #ccc',
//         }
//     };

//     const x = 40;
//     let color = [];
//     if (x <= 50) {
//         color.push('red');
//     } else if (x >= 51) {
//         color.push('green');
//     }



//     return (
//         <div>

//             <p>my name roshan, and my age {count}</p>
//             <button onClick={() => setCount(count + 1)} style={styles} >
//                 Click me
//             </button>
//             <h1 className={color} >{x}</h1>
//         </div>
//     )
// }

// export default Radium(Work);
import Radium from 'radium';
import React from 'react';

function Work() {


    const style = {
        backgroundColor: 'teal',
        border: '1px solid blue',
        ':hover': {
            backgroundColor: 'red'
        }
    }
    return (
        <div>
            <h3>Now you can see hover is working in inline styling</h3>
            <button style={style}>example of radium</button>
        </div>
    );
}

export default Radium(Work);

