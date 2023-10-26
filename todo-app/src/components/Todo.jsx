import React from 'react';
import {useState} from "react"
import TodoInput from './TodoInput'
import TodoItems from './TodoItems';

const Todo = () => {
    const [todo,setTodo] = useState([])

    const handleText = (text) => {
       let newTodo = {
          id:Date.now(),
          title:text,
          status:false
       }
       setTodo([...todo,newTodo])
    }
   // delete the todo
   const Delete = (id) => {
      let delTodo = todo.filter((el,i) => {
         return el.id !==id
      })
      setTodo(delTodo)
   }
 // toggle the todo
   const Toggle = (id) => {
      let togTodo = todo.map((el,i) => {
            return  el.id===id?{...el,"status":!el.status}:el
      })
      setTodo(togTodo)
   }
    console.log({"todo":todo})
  return (
    <div>
        <h1>Todos App</h1>
        <TodoInput 
           handleText = {handleText}
        />
        {
         todo && todo.map((item,i) =>
          <TodoItems
            key={item.id} 
            {...item} 
            Delete={Delete}
            Toggle={Toggle}
          />)
        }
    </div>
  )
}

export default Todo