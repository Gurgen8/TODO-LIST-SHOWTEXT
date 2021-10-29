import React from 'react'

export default function TodoItem({todo,onChecked,del}) {

    return (
        <div class="item" >
           <input type="checkbox" onChange={(e)=>{
              
               onChecked({...todo,
                isComplited:e.target.checked
                })
            }}
                checked={todo.isComplited} /> {todo.name}
          <button onClick={()=>{del(todo)}}> X</button> 
        </div>
    )
}
