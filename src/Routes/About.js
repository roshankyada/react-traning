import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/About">About</Link>
                        </li>
                        <li>
                            <Link to="/Contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <div>
                <section>
                    <h1>About1</h1>
                </section>
            </div>

        </div>
    )
}
