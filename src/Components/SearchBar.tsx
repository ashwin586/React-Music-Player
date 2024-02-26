import React, { useState } from "react";
import "../Styles/SearchBar.css";
import { SeachProps } from "../Interfaces";

const SearchBar: React.FC<SeachProps> = ({ tracks, setTracks }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const performSearch = (str: string) => {
    const filteredTracks = tracks.filter((track) =>
      track.name.toLowerCase().includes(str.toLowerCase())
    );
    setTracks(filteredTracks);
    setSearchQuery(str);
  };

  return (
    <>
      <div className="searchBar-container">
        <input
          placeholder="Search for tracks"
          type="text"
          onChange={(e) => performSearch(e.target.value)}
          value={searchQuery}
        />
      </div>
    </>
  );
};

export default SearchBar;
