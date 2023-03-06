import React from 'react'

export default function Footer() {
    const numbers = [1, 2, 3, 4, 5];

    const updatedNums = numbers.map((number, index) =>
        <li key={index}>
            {number}
        </li>
    );


    return (
        <div><ul>
            {updatedNums}
        </ul>
        </div>
    )
}
