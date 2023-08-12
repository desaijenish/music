import React from "react";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";

interface VolumeChange {
  change:any
}

const Volume = (props: VolumeChange) => {
  return (
    <div >
      <VolumeDown style={{fontSize:'30px',color:'white'}} />
      <Slider
        aria-label="Volume"
        onChange={props.change}
        min={0}
        max={1}
        step={0.01}
        defaultValue={1}
        style={{width:'150px',margin:"0px 10px",color:'white'}}
      />
      <VolumeUp style={{fontSize:'30px',color:"white"}} />
    </div>
  );
};

export default Volume;
