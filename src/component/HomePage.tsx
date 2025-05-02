import Card from '@mui/material/Card';
import toDO from '../assets/toDo.png';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
const navigate = useNavigate();
  return (
    <div className="h-full flex justify-center items-center flex-col">

       <p className='text-center text-black  font-bold text-2xl md:text-5xl flex justify-center items-center '>Productivity</p>
        <Card sx={{ borderRadius: '16px' }}
         className=" overflow-hidden border-4 border-black"
         >
           
            <img src={toDO} className='w-15 h-15 md:w-25 md:h-25' alt="ToDoImage" />
       
        </Card>
        <button 
        className='border bg-orange-500 w-40 h-[50px] mt-5 cursor-pointer rounded-lg hover:bg-orange-600'
        onClick={()=>{navigate('/toDO')}}
        >
          Let's Started
        </button>
    </div>
  )
}

export default HomePage
