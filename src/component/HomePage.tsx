import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import toDO from '../assets/toDo.png';
const HomePage = () => {

  return (
    <div className='flex justify-center items-center mx-auto'>
        <Card sx={{ minWidth: 275, }}>
            <p className='text-center text-black  font-bold text-2xl flex justify-center items-center mt-5'>Productivity</p>
            <img src={toDO} className='w-25 h-25' alt="ToDoImage" />
        <CardActions className=' flex justify-center '>
        <button className='border bg-orange-500 w-40 h-35 cursor-pointer rounded-lg hover:bg-orange-600'>Let's Started</button>
      </CardActions>
        </Card>
      
    </div>
  )
}

export default HomePage
