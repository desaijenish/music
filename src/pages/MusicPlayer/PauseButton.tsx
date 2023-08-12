import React from 'react'
import IconButton from "@mui/material/IconButton";
import { PiPauseFill } from "react-icons/pi";

const PauseButton = () => {
  return (
    <div>
        <IconButton
      aria-label="add an alarm"
      style={{ fontSize: "100px",color:"white " }} 
    >
      <PiPauseFill style={{ fontSize: "50px" }} />
    </IconButton>    
    </div>
  )
}

export default PauseButton
