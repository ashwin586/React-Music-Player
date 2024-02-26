import React, { useState } from "react";
import '../Styles/SearchBar.css'

const SearchBar: React.FC = () => {
  const [music, setMusic] = useState<string | "">("");
  return (
    <>
      <div className="searchBar-container">
        <input
          placeholder="Search for tracks"
          type="text"
          onChange={(e) => setMusic(e.target.value)}
          value={music}
        />
      </div>
    </>
  );
};

export default SearchBar;
