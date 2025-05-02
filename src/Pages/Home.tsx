import React from 'react'
import Header from '../component/Header'
import { ToDoApp } from '../component/ToDoApp'

const Home:React.FC = () => {
  return (
    <div className='flex h-screen flex-col'>
        <Header/>
        <ToDoApp/>
      
    </div>
  )
}

export default Home
