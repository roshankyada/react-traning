import React, { useEffect } from 'react'
import Api from './Api'

export default function ApiGet() {
    useEffect(() => {
        Api.get('/posts').then((res) => { console.log("[ApiGet]", res) })
    }, [])

    return (

        <div>ApiGet</div>
    )
}
