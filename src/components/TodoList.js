import React from 'react'
import TodoItem from './TodoItem'


function TodoList(props) {

const {todos,onChecked,del}=props

    return (
        <div style={{border:"2px solid black"}}>  
            <ul>  
            {todos.map((todo)=>
              <TodoItem key={todo.id} todo={todo} onChecked={onChecked} del={del}/>       
            )} 
            </ul>
        </div>
    )
}

export default TodoList