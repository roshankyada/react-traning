import { useState } from "react"

const From1 = () => {

    const formData = { firstName: "", lastName: "", age: "" }
    const [responseBody, setResponseBody] = useState(formData)

    const inputChangeHandler = (event) => {
        const { name, value } = event.target
        setResponseBody({ ...responseBody, [name]: value })
    }
    const onSubmitHandler = (event) => {
        event.preventDefault()
        console.log(responseBody)


        //Form submission happens here
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <div><label htmlFor="firstName">First Name</label></div>
            <div><input id="firstName" name="firstName" onChange={(e) => inputChangeHandler(e)} type="text" /></div>
            <div><label htmlFor="lastName">Last Name</label></div>
            <div><input id="lastName" name="lastName" onChange={(e) => inputChangeHandler(e)} type="text" /></div>
            <div><label htmlFor="age">Age</label></div>
            <div><input id="age" name="age" onChange={(e) => inputChangeHandler(e)} type="number" /></div>
            <input type="submit" />
        </form>
    )
}
export default From1