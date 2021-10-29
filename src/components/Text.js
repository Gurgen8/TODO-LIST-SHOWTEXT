import React from 'react'
import {useState} from "react"

 function Text(props) {
    const[show,setShow]=useState(true)
    const{info,max=10}=props

    return (
        <div>
         {show?`${info.substring(0,max)} ...`:info}
         <a href="#" onClick={ev=>{ev.preventDefault(); setShow(!show)}}>{show?"less":"more"}</a>
        </div>
    )
}
export default Text
