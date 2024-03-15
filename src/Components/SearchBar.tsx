import React, { useState } from "react";
import "../Styles/SearchBar.css";
import { SeachProps } from "../Interfaces";

const SearchBar: React.FC<SeachProps> = ({ tracks, setFilteredTracks }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const performSearch = (str: string) => {
    setSearchQuery(str);
    const filteredTracks = tracks.filter((track) =>
      track.name.toLowerCase().includes(str.toLowerCase())
    );
    setFilteredTracks(filteredTracks);
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
