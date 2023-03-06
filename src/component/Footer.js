
import { useState } from 'react'


export default function Footer() {

    const initState = ['Ford', 'BMW', 'Audi'];

    const [persons, setpersons] = useState(initState)

    const handelclick = () => {
        // persons.push('Brain')
        // persons.push('quber')
        // setpersons(persons)

        const newpersons = [...persons]
        persons.push('Brain')
        persons.push('quber')
        setpersons(newpersons)
    }

    console.log('hello')
    return (

        <div>

            <button onClick={handelclick}>Click</button>
            {
                persons.map(person => (
                    <div key={person}>{person}</div>
                ))

            }
        </div>
    )

}
