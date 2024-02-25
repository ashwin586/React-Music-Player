import React from "react";
import "../Styles/MusicCards.css";
import { MusicCardsProps } from "../Interfaces";

const MusicCards: React.FC<MusicCardsProps> = ({
  track,
  setCurrentSong,
  id,
  audioRef,
  tracks,
  isPlaying,
  setTracks,
}) => {
  const songSelectHandler = () => {
    const selectedSong = tracks.filter((track) => track.id === id);
    setCurrentSong(selectedSong[0]);
    const newTracks = tracks.map((track) => {
      if (track.id === id) {
        return {
          ...track,
          active: true,
        };
      } else {
        return {
          ...track,
          active: false,
        };
      }
    });
    setTracks(newTracks);
    if (isPlaying) audioRef.current?.play();
  };
  return (
    <>
      <div className="image-container" onClick={songSelectHandler}>
        <img src={track?.cover} alt="SongTemplate" />
        <h1>{track?.name}</h1>
        <h3>{track?.artist}</h3>
      </div>
    </>
  );
};

export default MusicCards;
