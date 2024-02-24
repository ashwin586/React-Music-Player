import React, { useState } from "react";
import SearchBar from "./Components/SearchBar";
import MusicCards from "./Components/MusicCards";
import Data from "./Data";
import "./Styles/App.css";
import { Track } from "./Interfaces";

const App: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>(Data);
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
    </>
  );
};

export default App;
