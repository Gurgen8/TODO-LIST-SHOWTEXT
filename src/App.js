import React from 'react'
import Text from './components/Text.js'
import  TodoList from "./components/TodoList.js"
import {useState} from "react"
import TodoForm from './components/TodoForm.js'
import TodoFooter from './components/TodoFooter.js'


export default function App() {


    let [todos,setTodos]=useState([])
    return (
        
        <div class="app">
            <div class="todo_div">
            <TodoForm  add={(text)=>{
                setTodos([
                    ...todos,
            
                {
                    id:new Date(),
                    name:text,
                    isComplited:false
                }
            ])
            }}/>

            <TodoList todos={todos} onChecked={(newTodo)=>{
                setTodos(todos.map((todo)=>{
                    if(todo.id===newTodo.id){
                        return newTodo
                    }
                    return todo
                }))

            }} 
            del={(todo)=>{
               setTodos(
                   todos.filter((t)=>t.id!==todo.id)) 
                   
             
            }}
            />
            <TodoFooter todo={todos} clear={()=>{
                setTodos(todos.filter((todo)=>!todo.isComplited))
        
            }} />
            </div>
            <Text max={300} info="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur sapiente veniam eius aperiam quibusdam perferendis odit obcaecati quis repellat a esse dolor inventore porro, corporis blanditiis, unde dolorum illo debitis! Voluptates aliquid quis ea adipisci minima, nihil sequi neque explicabo. Aspernatur atque ex iure enim dicta expedita molestias. Nesciunt perspiciatis harum amet corrupti ex consequatur facilis! Illo eum delectus magnam labore voluptas deserunt, laudantium error maiores ratione ipsa, atque laborum cumque soluta suscipit quia eligendi ad ducimus. Facilis quia hic labore tempore quos debitis doloremque, aliquam ipsa, voluptate, cum obcaecati dolores? Explicabo hic obcaecati quidem blanditiis ab ipsum pariatur dicta!"/>
        </div>
    )
}
