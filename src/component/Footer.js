import React, { useRef } from 'react'


const Footer = () => {
    let inputref = useRef(null)

    function handelInput() {
        console.log("roshan")
        inputref.current.value = "100"
        inputref.current.focus()
        inputref.current.style.color = "red"
        // inputref.current.style.display = "none"
    }


    return (
        <div className='Footer'>
            <input type="text" ref={inputref} />
            <button onClick={handelInput}>ref</button>

        </div>
    )
}

export default Footer