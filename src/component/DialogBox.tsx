import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import toDOImage from '../assets/toDo.png'
interface IDialogProps{
      open:boolean;
    handleCloseDialog:()=>void;
    progress:number
}
const DialogBox:React.FC<IDialogProps> = ({open,handleCloseDialog,progress}) => {
  return (
    <Dialog open={open} onClose={handleCloseDialog}>
    <DialogTitle sx={{textAlign:'center'}}>Keep shinning </DialogTitle>
    <DialogContent>
      <img src={toDOImage} alt="toDOImage" className='w-25 h-25' />
      <p className="text-black mt-2"> Your Final Progress: {progress}% </p>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleCloseDialog}>Back To Home</Button>
    </DialogActions>
  </Dialog>
  
  )
}

export default DialogBox
