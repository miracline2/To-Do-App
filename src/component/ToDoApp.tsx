import React, { useEffect, useState } from 'react'
import ToDoList from './ToDoList'
import Card from '@mui/material/Card'
import ProgressBar from './ProgressBar'
import DialogBox from './DialogBox'

interface toDoData {
  id: number,
  value: string,
  isRead: boolean
}

export const ToDoApp: React.FC = () => {

  const [value, setValue] = useState('')
  const [toDoList, setToDoList] = useState<toDoData[]>([])
  const [date, setDate] = useState<string>('')
  const [day, setDay] = useState<string>('')
  const [progress, setProgress] = useState<number>(0)
  const [openDialog, setOpenDialog] = useState(false);
  const [error, setError] = useState('');
  const handleSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    if (value.trim() === '') {
      setError ('Please enter a task!');
      return;
    }
    const toDoData: toDoData = {
      id: Date.now(),
      value: value,
      isRead: false
    }
    
    setValue('')
    setToDoList([...toDoList, toDoData])
    setError('')
  }

  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);

  }
  useEffect(() => {
    console.log('Updated toDoList:', toDoList);
  }, [toDoList, progress]);

  useEffect(() => {
    const today = new Date();
    const todayDay = today.toLocaleDateString('en-US', { weekday: 'long' });
    const todayDate = today.toLocaleDateString('en-GB');
    setDate(todayDate);
    setDay(todayDay)

  }, [date, day])

  const onDelete = (id: number) => {
    const updateDelete = toDoList.filter(toDO => toDO.id != id)
    setToDoList(updateDelete)
  }

  useEffect(() => {
    const total = toDoList.length;
    const completed = toDoList.filter(todo => todo.isRead).length;
    const percentage = Math.floor(total === 0 ? 0 : (completed / total) * 100);
    console.log(percentage);

    setProgress(percentage);
  }, [toDoList]);


  const onCompleted = (id: number) => {
    const completedStatus = toDoList.map((item) => {
      if (item.id === id) {
        return { ...item, isRead: !item.isRead }
      }
      return item
    })
    setToDoList(completedStatus);

  }
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };




  return (
    <div className="h-full flex justify-center items-center flex-col">

      <Card sx={{ minWidth: 275, borderRadius: '16px' }}
        className=" flex justify-evenly flex-col md:flex-row items-center overflow-hidden border-2 md:border-4 border-black h-[45%] w-[50%]  "
      >


        <Card sx={{ borderRadius: '16px' }}
          className=' min-w-[250px] border-2 md:border-4 border-black h-[45%] mt-5 md:mt-0 '
        >
          <p className='text-black text-sm md:text-2xl text-center mt-[2em]  xl:mt-10 '>{day}</p>
          <p className='text-black text-sm md:text-2xl text-center'>{date}</p>

        </Card>
        <Card >
        </Card>
        <div className='flex flex-col gap-y-2 xl:gap-y-10'>
          <ProgressBar progress={progress} />
          <form action="" onSubmit={handleSubmit} className='flex flex-row gap-2'

          >
            <input type="text" name=""
              className='w-full h-[30px]  md:w-[350px] md:h-[60px] p-5 border-2 md:border-4 text-black border-black rounded-xl'
              value={value} onChange={handleChanges} placeholder="Enter a To Do List" />

            <button type="submit"
              className='w-[30px] h-[30px] xl:w-[50px] md:h-[50px] border-2 md:text-4xl bg-orange-500 rounded-full mt-2 items-center '
            >+</button>
          </form>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>

      </Card>
      <ToDoList todos={toDoList} onDelete={onDelete} onCompleted={onCompleted} />

      <button
        className='w-[250px] h-[50px] border-2 text-xl bg-orange-500 rounded-xl mt-2 items-center '
        onClick={handleOpenDialog}
      >Finish The Day</button>
{openDialog ? <DialogBox open={openDialog } handleCloseDialog={handleCloseDialog }
  progress={progress} /> : null}



    </div>
  )
}
