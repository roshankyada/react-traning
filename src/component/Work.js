
import React from 'react';
import './my-style.css';

function Work() {



    const style = {

        width: '300px',
        backgroundColor: 'teal',
        border: '1px solid blue',



    };


    return (
        <div>
            <h3 className="red"  >Now you can see hover is working in inline styling</h3>
            <button className="work" style={style} >example of radium</button>

        </div>
    );
}

export default Work;

