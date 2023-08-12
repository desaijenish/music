import React from 'react'
import Slider from '@mui/material/Slider';

interface SleekChange {
  change:any,
  value:number,
  duration:any
}

const Seek = (props:SleekChange) => {
  return (
    <div>
       <Slider
        aria-label="Temperature"
        min={0}
        max={props.duration || 1}
        value={props.value}
        onChange={props.change}
        style={{margin:'14px 0px',color:'white'}}
      />
    </div>
  )
}

export default Seek
