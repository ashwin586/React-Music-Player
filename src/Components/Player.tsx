import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Player.css";
import { PlayerProps, Track } from "../Interfaces";

const Player: React.FC<PlayerProps> = ({
  song,
  setCurrentSong,
  audioRef,
  setIsPlaying,
  isPlaying,
  tracks,
  setTracks,
}) => {
  const activeSongHandler = (nextSong: Track) => {
    const newSong = tracks.map((track) => {
      if (track.id === nextSong.id) {
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
    setTracks(newSong);
  };

  // For Play/Pause songs
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current?.play();
      setIsPlaying(!isPlaying);
    }
  };

  // For handling song skips
  const skipSongHandler = (action: string) => {
    const currentIndex = tracks.findIndex((track) => track.id === song.id);
    if (action === "skip-backward") {
      setCurrentSong(tracks[currentIndex + (1 % tracks.length)]);
      activeSongHandler(tracks[currentIndex + (1 % tracks.length)]);
    }

    if (action === "skip-forward") {
      if (currentIndex - (1 % tracks.length) === -1) {
        setCurrentSong(tracks[tracks.length - 1]);
        activeSongHandler(tracks[tracks.length - 1]);
        if (isPlaying) audioRef.current?.play();
        return;
      }
      setCurrentSong(tracks[currentIndex - (1 % tracks.length)]);
      activeSongHandler(tracks[currentIndex - (1 % tracks.length)]);
    }
    if (isPlaying) audioRef.current?.play();
  };

  const volumeHandler = () => {};
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
        <FontAwesomeIcon
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
          onClick={() => skipSongHandler("skip-backward")}
        />
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
          onClick={() => skipSongHandler("skip-forward")}
        />
      </div>
      <div className="audio-controls">
        <input
          value={50}
          min={0}
          max={100}
          type="range"
          className="volume-range"
          onChange={volumeHandler}
        />
      </div>
    </>
  );
};

export default Player;
