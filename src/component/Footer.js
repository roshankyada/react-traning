import React, { useState } from 'react';

export default function Footer() {
    const [state, setState] = useState({
        name: 'RK',
        age: ''
    });

    function handleNameChange(event) {
        const newName = event.target.value;
        setState(prevState => ({ ...prevState, name: newName }));
    }

    return (
        <div>
            <input type="text" value={state.name} onChange={handleNameChange} />
            <p>Name: {state.name}</p>
            <p>Age: {state.age}</p>
        </div>
    );
}
