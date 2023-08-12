import React from 'react'
import { FaPlay } from "react-icons/fa";
import IconButton from "@mui/material/IconButton";

const PlayButton = () => {
  return (
    <div>
      <IconButton
      aria-label="add an alarm"
      style={{ fontSize: "100px",color:"white"}} 
    >
      <FaPlay style={{ fontSize: "50px" }} />
    </IconButton>
    </div>
  )
}

export default PlayButton
