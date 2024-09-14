import {useState} from "react"


const App:React.FC = () =>{

  const [value, setValue] = useState('')
  const [toDoList, setToDoList] = useState([])

  const handleSubmit = (event:React.FormEvent<EventTarget>) =>{
    event.preventDefault();
    setValue('')
    setToDoList([])
    console.log('---',value);
    
  }

  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setValue(event.target.value)

  }
return(
<>
<div className="container">
<form action="" onSubmit={handleSubmit}>
  <input type="text" name="" id="" value={value} onChange={handleChanges} placeholder="Enter a To Do List" />
  <button type="submit">Submit</button>
</form>

</div>

</>

);
}

export default App
