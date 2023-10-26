import React from 'react'

const TodoItems = (props) => {
  const  {title,status,id,Delete,Toggle} = props
  const handleDelete = () => {
     Delete(id)
  }
  console.log({"props":props})
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px",marginTop:"10px"}}>
      {title}{" -- "}{status?"Completed":"Not Completed"} 
      <button onClick={() =>Toggle(id)}>Toggle</button>
      <button onClick={() =>handleDelete(id)}>Delete</button>
    </div>
  )
}

export default TodoItems