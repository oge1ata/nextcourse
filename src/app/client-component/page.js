
'use client'

// need to put us client so you can use react hoooks and stuff

import {useState} from 'react'

export default function ClientComponent(){

    const [toggle, setToggle] = useState(false)
    return <h1> This is client component</h1>
}