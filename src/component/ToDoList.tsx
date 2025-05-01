import React from 'react'

interface ItodoListProps{
  id:number,
  value:string,
  isRead:boolean
}
interface ItodosProps{
  todos:ItodoListProps[]
}

const ToDoList:React.FC<ItodosProps>= ({todos}) => {
  return (
    <div className='bg-slate-300 w-full shadow-lg'> 
        {todos.map((item:any)=>(
          <h1>{item.value}</h1>
        ))}

      
    </div>
  )
}

export default ToDoList
