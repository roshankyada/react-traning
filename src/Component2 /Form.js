import React, { useState } from 'react'
import './Forms.css'

export default function Form() {

    const [text, setText] = useState([
        { name: '', salary: '' }
    ])

    const handleAdd = () => {
        setText([...text, { name: '', salary: '' }])
    }

    const submit = (e) => {
        e.preventDefault();
        console.log({ text })
    }

    const remove = (index) => {
        let data = [...text]
        data.splice(index, 1)
        setText(data)
    }
    return (
        <div className='Form'>
            <div>
                <div>
                    <button onClick={handleAdd}>Add</button>
                    {text.map((index, input) => {
                        return (
                            <div key={index} className="inputdata">
                                <input name='name' value={input.name} />
                                <input name='salary' value={input.salary} />
                                <button type='submit' onClick={submit} >submit</button>
                                <button type='remove' onClick={() => remove(index)}>Remove</button>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

