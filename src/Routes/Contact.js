import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


export default function Contact() {




    return (
        <div>


            <div>
                <section>
                    <h1>Contact1</h1>

                    <NavLink to="/Contact/Childe"> Child</NavLink>
                    {/* <NavLink to="/Contact/User"> User</NavLink> */}
                </section>

                <Outlet />
            </div>
        </div>
    )
}
