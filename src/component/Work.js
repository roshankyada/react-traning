import React from 'react'
import './my-style.module.css';
// import Radium from 'radium';

const Work = () => {

    // const [count, setCount] = useState(0);
    // const styles = {
    //     background: 'green',
    //     font: 'inherit',
    //     border: '1px solid black',
    //     padding: '8 px',
    //     borderRadius: '7px',
    //     boxShadow: '0 4px 5px #ccc',
    // };

    const x = 60;
    let color = [];
    if (x <= 50) {
        color.push('red');
    } else if (x >= 51) {
        color.push('green');
    }



    return (
        <div>

            {/* <p>my name roshan, and my age {count}</p>
            <button onClick={() => setCount(count + 1)} style={styles} >
                Click me
            </button> */}
            <h1 className={color} >{x}</h1>
        </div>
    )
}

export default Work;

