import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Childe({ users }) {
    return (
        <div>
            <section>

                <p>childe of Contact Js</p>

                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <NavLink to={user.id}>
                                {user.fullName}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <Outlet />
            </section>

        </div>
    )
}
