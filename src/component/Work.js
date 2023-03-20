
import React, { useContext } from 'react';
import DemoContext from './DemoContext';

function Work() {

    const a = useContext(DemoContext)

    const style = {

        width: '300px',
        backgroundColor: 'teal',
        border: '1px solid blue',



    };


    return (
        <div className='Work'>
            <h3 className="red"  >Now you can see hover is working in inline styling</h3>
            <button className="work" style={style} >example of radium</button>
            <h2> this is {a.name} and {a.class}</h2>
        </div>
    );
}

export default Work;

