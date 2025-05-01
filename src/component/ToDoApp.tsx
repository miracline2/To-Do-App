import React, { useState } from 'react'
import ToDoList from './ToDoList'

interface toDoData {
  id: number,
  value: string,
  isRead: boolean
}

export const ToDoApp: React.FC = () => {

  const [value, setValue] = useState('')
  const [toDoList, setToDoList] = useState<toDoData[]>([])

  const handleSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    const toDoData: toDoData = {
      id: Date.now(),
      value: value,
      isRead: false
    }
    setValue('')
    setToDoList([...toDoList, toDoData])
    console.log('---', value);
    console.log('toDolist', toDoList);


  }

  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)

  }




  return (
    <div className='flex flex-col items-center justify-center'>

      <div className="container">
        <form action="" onSubmit={handleSubmit}>
          <input type="text" name="" id="" value={value} onChange={handleChanges} placeholder="Enter a To Do List" />
          <button type="submit">Submit</button>
        </form>

        <ToDoList todos={toDoList} />

      </div>
      {/* {toDoList.map((item)=>(
  <div>
    <h1>{item.value}</h1>
  </div>
))} */}
    </div>
  )
}
