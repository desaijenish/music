import React, { useContext, useEffect, useRef, useState } from "react";
import RightSideNext from "./RightSideNext";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import Volume from "./Volume";
import Seek from "./Seek";
import MusicContext  from "../../context/music/MusicContext";
import LeftSideNext from "./LeftSideNext";


const Musicplayer = () => {
  const context = useContext(MusicContext);
  const music = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [start , setstart] = useState(true);        
  
  const handleTimeUpdate = () => {
    if (music.current) {
      setCurrentTime(music.current.currentTime);
    }
  };
  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = parseFloat(event.target.value);
    if (music.current) {
      music.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };
  const hendlerPlayPause = () => {
    setstart((start) => !start);
    if (start) {
      music.current?.play();  
    } else {
      music.current?.pause();
    }
  };
  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const volume = parseFloat(event.target.value);
    if (music.current) {
      music.current.volume = volume;
    }
  };
  useEffect(()=>{
      setstart(true)
  },[context?.index])

  return ( 
    <div>
      <div className="backgroud">
        <div className="musicplayerbox">
          <center>
            <img
              src={context?.musicData[context?.index].image}
              alt=""
              style={{ width: "250px", height: "250px", borderRadius: "50%" }}
            />
            <p style={{color:"white"}}>{context?.musicData[context?.index].title}</p>
            <audio
              ref={music}
              src={context?.musicData[context?.index].music}
              onTimeUpdate={handleTimeUpdate}
            />
            <div style={{ display: "flex", justifyContent: "center" }}> 
              <LeftSideNext />
              <div onClick={hendlerPlayPause} >
                {start ?<PlayButton /> : <PauseButton />  }  
              </div>
              <RightSideNext />
            </div>
            <Seek
              duration={music.current?.duration}
              value={currentTime}
              change={handleSeek}
            />
            <Volume change={handleVolumeChange} />
          </center>
        </div>
      </div>
    </div>
  );
};
export default Musicplayer;
