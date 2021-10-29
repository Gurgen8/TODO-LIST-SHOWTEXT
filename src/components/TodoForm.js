import { add } from 'lodash'
import React from 'react'
import {useState} from 'react'


export default function TodoForm({add}) {

    const[text,setText]=useState("")
    return (
        <form onSubmit={(e)=>{
            e.preventDefault()
            add(text)
            setText("")
        }}>
            <input value={text} onChange={(e)=>{setText(e.target.value)}} type="text"/>
            <button >ADD</button>
        </form>
    )
}
