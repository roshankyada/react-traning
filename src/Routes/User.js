import React from 'react'
import { NavLink, useParams, } from 'react-router-dom'

export const User = () => {
    const { id } = useParams()



    return (
        <div>
            <section>
                <p>User : {id}</p>
                <NavLink to="/Contact/Childe">back to prev</NavLink>
            </section>


        </div>
    )
}

