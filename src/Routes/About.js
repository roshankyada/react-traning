import React from 'react'
import { useParams } from 'react-router-dom'

import HOC from './HOC'

export default function About() {
    const { id } = useParams();
    console.log(id)

    return (
        <div>

            <HOC />
            <div>
                <section>
                    <h1>About1 - {id}</h1>

                </section>
            </div>

        </div>
    )
}
