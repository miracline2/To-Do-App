import { Route, Routes } from "react-router-dom"
import HomePage from "../component/HomePage"
import Home from "../Pages/Home"


const Routing = () => {
  return (
    
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/toDo" element={<Home/>} />
      </Routes>
      
  
  )
}

export default Routing
