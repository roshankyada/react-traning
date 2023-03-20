import React from 'react'
import DemoContext from './DemoContext'

export const DemoState = (props) => {
    const state = {
        name: "roshan",
        class: "ty-D"
    }
    return (
        <DemoContext.Provider value={state}>
            {props.children}
        </DemoContext.Provider>
    )
}

export default DemoState