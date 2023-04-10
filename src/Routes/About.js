import React from 'react'
import { useParams } from 'react-router-dom'


export default function About() {
    const { id } = useParams();
    console.log(id)

    return (
        <div>


            <div>
                <section>
                    <h1>About1 - {id}</h1>

                </section>
            </div>

        </div>
    )
}
