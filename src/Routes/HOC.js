import React from 'react'
import { NavLink } from 'react-router-dom'
export default function HOC() {


    return (

        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={{
                                    pathname: "/About",
                                    hash: '#submit',
                                    search: '?quick-submit=true',

                                }}

                            >
                                About
                            </NavLink>
                            {/* <Link to="/About">About</Link> */}
                        </li>
                        <li>
                            <NavLink exact to="/Contact">Contact</NavLink>
                            {/* <Link to="/Contact">Contact</Link> */}
                        </li>
                    </ul>
                </nav>
            </header>

        </>
    )

}
