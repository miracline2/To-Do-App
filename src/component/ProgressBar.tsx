
import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import { Box } from '@mui/material';

interface IProgressInterface{
    progress:number
}
const ProgressBar:React.FC<IProgressInterface>= ({progress}) => {
  return (
    <div>
      <Box sx={{ width: '100%', }}>
        <h2 className='text-black ml-2 md:ml-0'> Your Progress {progress}%</h2>
  <LinearProgress variant="determinate" value={progress } 
  sx={{
    height: 12,                    
    borderRadius: 5,             
    backgroundColor: '#f0f0f0',    
    '& .MuiLinearProgress-bar': {
      backgroundColor: '#ff5722', 
    },
  }}
  /> 
</Box>

      
    </div>
  )
}

export default ProgressBar
