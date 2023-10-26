import React from 'react'
import {useState} from "react";

const TodoInput = ({handleText}) => {
   const [text,setText] = useState("")

   const handleClick = () => {
      handleText(text)
   }
  return (
    <div>
        <input
          type="text"
          placeholder='Enter your todo'
          value={text}
          onChange={(e)=>setText(e.target.value)}
        />
        <button onClick={handleClick}>Add Todo</button>
    </div>
  )
}

export default TodoInput