import React, { useState } from 'react'
import './Forms.css'


export default function Form() {

    const [text, setText] = useState([{ name: '', salary: '' }])

    const handleAdd = () => {
        setText([...text, { name: '', salary: '' }])

    }

    const handleChange = (e) => {
        setText((text) => ([...text, { name: e.target.value, salary: e.target.value }]))

    }


    const submit = (e) => {

        e.preventDefault();
        console.log(text)
        alert('You have submitted the form.')


    }

    const remove = (index) => {
        let data = [...text]
        data.splice(index, 1)
        setText(data)
    }



    return (
        <div className='Form'>

            <div>

                <button onClick={handleAdd}>Add</button>
                {text.map((index, input) => {
                    return (
                        <div key={index.input} className="inputdata">
                            <input className='FormInput' name='name' value={input.name} onChange={handleChange} />
                            <input className='FormInput' name='salary' value={input.salary} onChange={handleChange} />
                            <button type='submit' onClick={submit} >submit</button>
                            <button type='remove' onClick={() => remove(input)}>Remove</button>

                        </div>
                    )
                })}

            </div>



        </div>
    )
}


