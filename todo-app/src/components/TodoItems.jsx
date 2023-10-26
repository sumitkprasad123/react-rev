import React from 'react'

const TodoItems = (props) => {
  const  {title,status,id,Delete} = props
  const handleDelete = () => {
     Delete(id)
  }
  console.log({"props":props})
  return (
    <div>
      {title}{" -- "}{status?"Completed":"Not Completed"}
      <button onClick={() =>handleDelete(id)}>Delete</button>
    </div>
  )
}

export default TodoItems