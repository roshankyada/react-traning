import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

export const User = () => {
    const { userId } = useParams()
    return (
        <div>
            <section>
                <p>User : {userId}</p>
                <NavLink to="Childe">back to prev</NavLink>
            </section>
        </div>
    )
}
