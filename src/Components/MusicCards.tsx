import React from "react";
import "../Styles/MusicCards.css";
import { MusicCardsProps } from "../Interfaces";

const MusicCards: React.FC<MusicCardsProps> = ({ track }) => {
  return (
    <>
      <div className="image-container">
        <img src={track?.cover} alt="SongTemplate" />
        <h1>{track.name}</h1>
        <h3>{track.artist}</h3>
      </div>
    </>
  );
};

export default MusicCards;
