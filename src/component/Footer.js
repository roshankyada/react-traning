
import { useState } from 'react'

export default function Footer() {

    const [loggedIn, setLoggedIn] = useState(true)
    const rentcars = ['Ford', 'BMW', 'Audi'];
    const cars = [
        { name: "roshan", email: "roshan@gmail.com" },
        { name: "RK", email: "RK@gmail.com " }
    ]

    const mycar = cars.map((data) =>
        <>
            {data.name},
            {data.email}
        </>

    )

    return (

        <div>
            {loggedIn == 1 ? <h1>welcome to user 1</h1>
                : loggedIn == 2 ? <h1>Welcome to user 2</h1>
                    : <h1>Welcome to user 3</h1>}
            {loggedIn && <h2>hello</h2>}
            {/* {cars.map((data) =>
                <>
                    {data.name},
                    {data.email}
                </>

            )} */}
            <h4>{rentcars[1]}</h4>
            {mycar}
        </div>
    )

}
