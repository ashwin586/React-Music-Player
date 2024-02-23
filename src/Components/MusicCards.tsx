import React from "react";
import '../Styles/MusicCards.css'

const MusicCards: React.FC = () => {
  return <>
    <div className="image-container">
      <img src="https://picsum.photos/seed/picsum/150/150" alt="SongTemplate" />
      <h1>Song Name</h1>
      <h3>Song Author</h3>
    </div>
  </>;
};

export default MusicCards;
