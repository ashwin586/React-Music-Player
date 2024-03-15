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
  const [volume, setVolume] = useState<number>(0.5);
  const [filteredTracks, setFilteredTracks] = useState<Track[]>(Data);
  return (
    <>
      <SearchBar tracks={tracks} setFilteredTracks={setFilteredTracks} />
      <div className="library-container">
        {filteredTracks && (
          <div className="tracks-container">
            {filteredTracks.map((track) => (
              <MusicCards
                key={track?.id}
                track={track}
                setCurrentSong={setCurrentSong}
                isPlaying={isPlaying}
                tracks={tracks}
                audioRef={audioRef}
                setTracks={setTracks}
                id={track.id}
              />
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
          volume={volume}
          setVolume={setVolume}
        />
      </div>
      <audio src={currentSong.audio} ref={audioRef}></audio>
    </>
  );
};

export default App;
