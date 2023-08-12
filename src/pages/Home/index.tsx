import React from "react";
import MusicPlayList from "../MusicPlayList";
import Musicplayer from "../MusicPlayer";

const Home = () => {
  return (
    <div className="flex">
      <MusicPlayList />
      <div style={{ width: "80%" }}>
        <Musicplayer />
      </div>
    </div>
  );
};

export default Home;
