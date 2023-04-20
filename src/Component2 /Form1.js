import './Forms.css'
import { useState } from "react"

import { Button, Icon } from 'semantic-ui-react';

const From1 = () => {


    const formData = { firstName: "", email: "", age: "", password: "", mobileNumber: '' }
    const [responseBody, setResponseBody] = useState(formData)
    const [error, setError] = useState(null)
    const [validated, setValidated] = useState(false);
    const [passError, setPassError] = useState(null)

    function inputChangeHandler(event) {
        const { name, value } = event.target
        setResponseBody({ ...responseBody, [name]: value })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        console.log({ responseBody })
        if (!responseBody.firstName || !responseBody.email || !responseBody.age || !responseBody.password || !responseBody.mobileNumber) {
            setError('Please fill out all fields')
            console.log({ error })
            return
        } else {
            console.log(responseBody)
        }

        //Form submission happens here  
        if (validatePassword()) {
            setValidated(true);
        } else {
            // display error messag
            // console.log('Password must be at least 8 characters long. ')
            setPassError('*Password must be at least 8 characters long.')
        }
    }



    const validatePassword = () => {
        return responseBody.password.length >= 8;
    };


    return (
        <div className='Form'>
            <form onSubmit={onSubmitHandler} >
                {error && <p style={{ color: "red" }}>{error}</p>}
                <div><h4 htmlFor="firstName">First Name</h4></div>
                <div><input className='FormInput' id="firstName" name="firstName" required minLength={5} placeholder='---name---' onChange={(e) => inputChangeHandler(e)} type="text" /></div>

                <div><h4 htmlFor="age">Age</h4></div>
                <div><input className='FormInput' id="age" name="age" placeholder='---age---' onChange={(e) => inputChangeHandler(e)} type="number" /></div>

                <div><h4 htmlFor="lastName">Email</h4></div>
                <div><input className='FormInput' id="Email" name="email" placeholder='---email---' onChange={(e) => inputChangeHandler(e)} type="email" /></div>

                <div><h4 htmlFor="firstName">Password</h4></div>
                <div><input className='FormInput' id="password" name="password" placeholder='---pass---' value={responseBody.password} onChange={(e) => inputChangeHandler(e)} type="text" />
                    {error && <p style={{ color: "red" }}>{passError}</p>}</div>


                <div><h4 htmlFor="firstName">Mobile-number</h4></div>

                <div><input className='FormInput' id="mobileNumber" name="mobileNumber" placeholder='123-456-7890' maxLength={12} onChange={(e) => inputChangeHandler(e)} type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" /></div>

                {/* <input className="btn btn-success" type="submit" /> */}
                <Button animated type="submit" >
                    <Button.Content visible>Submit</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>
                {/* <input className="btn btn-danger" type="reset" /> */}
                <Button animated='vertical' type="reset">
                    <Button.Content visible>reset</Button.Content>
                    <Button.Content hidden >
                        <Icon name='redo' />
                    </Button.Content>
                </Button>
            </form>

        </div >
    )
}
export default From1