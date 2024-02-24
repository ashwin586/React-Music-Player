import React, { useState, useRef } from "react";
import SearchBar from "./Components/SearchBar";
import MusicCards from "./Components/MusicCards";
import Data from "./Data";
import "./Styles/App.css";
import { Track } from "./Interfaces";
import Player from "./Components/Player";

const App: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [tracks, setTracks] = useState<Track[]>(Data);
  const [currentSong, setCurrentSong] = useState<Track>(tracks[0]);
  return (
    <>
      <SearchBar />
      <div className="library-container">
        {tracks && (
          <div className="tracks-container">
            {tracks.map((track) => (
              <MusicCards key={track?.id} track={track} />
            ))}
          </div>
        )}
      </div>
      <div className="player-container">
        <Player
          tracks={tracks}
          setTracks={setTracks}
          song={currentSong}
          setCurrentSong={setCurrentSong}
          audioRef={audioRef}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      </div>
      <audio src={currentSong.audio} ref={audioRef}></audio>
    </>
  );
};

export default App;
