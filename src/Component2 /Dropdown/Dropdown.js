import React, { useState } from 'react'
import { SplitButton } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';


const Dropdownn = () => {

    const [val, setVal] = useState('')
    const data = ['A', 'B', 'C']
    // const [state, setState] = useState()

    return (
        <div>
            <div className=' m-4 '>
                <input list='data' onChange={(e) => setVal(e.target.value)} />
                <datalist id='data'>
                    {data.map((op) => <option>{op}</option>)}
                </datalist>
                <h1>{val}</h1>
            </div>

            {/* ************************************** */}



            <Dropdown as={ButtonGroup}>
                <button className="btn btn-success"> Split Button</button>
                <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

                <Dropdown.Menu>
                    <Dropdown.Item>Item 1</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item >Another action</Dropdown.Item>
                    <Dropdown.Item >Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>


            {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map((variant) => (
                <SplitButton title={variant} variant={variant.toLowerCase()} >
                    <Dropdown.Item eventKey="1">Roll</Dropdown.Item>
                    <Dropdown.Item >Cemera</Dropdown.Item>
                    <Dropdown.Item > {data.map((op) => <option>{op}</option>)}</Dropdown.Item>

                </SplitButton>
            ))}

        </div >
    )
}

export default Dropdownn