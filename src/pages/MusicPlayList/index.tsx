import React, { useContext } from "react";
import MusicContext  from "../../context/music/MusicContext";
import Card from "./Card";  

const MusicPlayList = () => {
  const context = useContext(MusicContext);

  return (
    <div className="musicplaylist">
      <center
        style={{
          height: "60px",
          position: "sticky",
          top: "0",
          zIndex: "1",
          backgroundColor: "#E0E0E0",
        }}
      >
        <h1>Playlist</h1>
      </center>
      {context?.musicData.map((e, i) => {
        return (
          <div onClick={() => context?.startIndexHandler(i)}>
            <Card image={e.image} title={e.title} />
          </div>
        );
      })}
    </div>
  );
};

export default MusicPlayList;
