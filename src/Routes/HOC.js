import React from 'react'
import { NavLink } from 'react-router-dom'
export default function HOC() {


    return (

        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink exact to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink exact to={"/About"} > About</NavLink>

                        </li>
                        <li>
                            <NavLink to={{
                                pathname: "/Contact",
                                hash: 'start-position',
                                search: '?quick-submit=true',

                            }}>Contact</NavLink>

                        </li>
                    </ul>
                </nav>
            </header>

        </>
    )

}
