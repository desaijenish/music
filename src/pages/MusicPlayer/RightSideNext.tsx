import React, { useContext } from "react";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import IconButton from "@mui/material/IconButton";
import MusicContext from "../../context/music/MusicContext";

const RightSideNext = () => {
  const context = useContext(MusicContext)
  return (
    <IconButton
      aria-label="add an alarm"
      onClick={() =>context?.nextHandlerRight()}
      style={{color:'white'}}
    >
      <SkipNextIcon style={{ fontSize: "50px" }} />
    </IconButton>
  );
};

export default RightSideNext;
