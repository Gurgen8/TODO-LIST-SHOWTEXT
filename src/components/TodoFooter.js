import React from 'react'

export default function TodoFooter(props) {

    const{todo,clear}=props
    const completedlength=todo.filter((t)=>t.isComplited===true).length
    return (
        <div class="footer">
            <span>{completedlength}/{todo.length} completed</span>
            <button onClick={clear} >CLEAR COMPLETED</button>
        </div>
    )
}
