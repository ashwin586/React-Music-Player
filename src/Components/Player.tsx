import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Player.css";
import { PlayerProps } from "../Interfaces";

const Player: React.FC<PlayerProps> = ({
  song,
  setCurrentSong,
  audioRef,
  setIsPlaying,
  isPlaying,
  tracks,
  setTracks,
}) => {
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current?.play();
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <>
      <div className="current-playing">
        <img src={song?.cover} alt="currentPlayingSongCover" />{" "}
        <span>
          <h4>{song?.name}</h4>
          <p>{song?.artist}</p>
        </span>
      </div>
      <div className="track-controls">
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
          onClick={playSongHandler}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
      <div className="audio-controls">
        <input
          value={50}
          min={0}
          max={100}
          type="range"
          className="volume-range"
        />
      </div>
    </>
  );
};

export default Player;
