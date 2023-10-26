import React from 'react'

const TodoItems = (props) => {
  const  {title,status,id} = props
  console.log({"props":props})
  return (
    <div>
      {title}{" -- "}{status?"Completed":"Not Completed"}
    </div>
  )
}

export default TodoItems