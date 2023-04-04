import React from 'react'
import { useParams } from 'react-router-dom'

import HOC from './HOC'

export default function About() {
    const { id, name } = useParams();
    console.log(id, name)

    return (
        <div>

            <HOC />
            <div>
                <section>
                    <h1>About1 - {id} - ({name})</h1>

                </section>
            </div>

        </div>
    )
}
