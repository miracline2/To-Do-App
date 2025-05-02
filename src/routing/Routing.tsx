import { Route, Routes } from "react-router-dom"
import HomePage from "../component/HomePage"
import { ToDoApp } from "../component/ToDoApp"


const Routing = () => {
  return (
    
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/toDo" element={<ToDoApp/>} />
      </Routes>
      
  
  )
}

export default Routing
