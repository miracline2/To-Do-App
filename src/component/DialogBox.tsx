import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import toDOImage from '../assets/toDo.png'
interface IDialogProps{
      open:boolean;
    handleCloseDialog:()=>void;
    progress:number
}
const DialogBox:React.FC<IDialogProps> = ({open,handleCloseDialog,progress}) => {
  return (
    <Dialog open={open} onClose={handleCloseDialog} className='overflow-hidden'>
        <div className='flex justify-end items-center mt-4'>
      <button className='text-red-500 md:text-3xl w-[125px] h-[30px]' onClick={handleCloseDialog}>X</button>
    </div>
    <h1 style={{textAlign:'center'}}
    className='mt-5 font-bold md:text-2xl'
    >Keep shinning </h1>

    <DialogContent className='flex items-center'>
      <img src={toDOImage} alt="toDOImage" className=' w-[100px] md:w-[150px] md:h-15' />
      <p className="text-black md:text-xl text-md mt-2"> Your Final Progress - {progress}% on This Day </p>
    </DialogContent>
  
  </Dialog>
  
  )
}

export default DialogBox
