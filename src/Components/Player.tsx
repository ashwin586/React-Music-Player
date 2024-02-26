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
  volume,
  setVolume
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
      if (currentIndex - (1 % tracks.length) === -1) {
        setCurrentSong(tracks[tracks.length - 1]);
        activeSongHandler(tracks[tracks.length - 1]);
        if (isPlaying) audioRef.current?.play();
        return;
      }
      setCurrentSong(tracks[currentIndex - 1]);
      activeSongHandler(tracks[currentIndex - 1]);
    }

    if (action === "skip-forward") {
      if (currentIndex + (1 % tracks.length) >= tracks.length) {
        setCurrentSong(tracks[tracks.length - 1 - currentIndex]);
        activeSongHandler(tracks[tracks.length - 1 - currentIndex]);
        if (isPlaying) audioRef.current?.play();
        return;
      }
      setCurrentSong(tracks[currentIndex + (1 % tracks.length)]);
      activeSongHandler(tracks[currentIndex + (1 % tracks.length)]);
    }
    if (isPlaying) audioRef.current?.play();
  };

  // Handling volume
  const volumeHandler = (e:number) => {
    const newVolume = e / 100
    setVolume(newVolume)
    audioRef.current!.volume = volume ;
  };
  return (
    <>
      <div className="current-playing">
        <img src={song?.cover} alt="currentPlayingSongCover" />{" "}
        <span>
          <div className="song-details">
            <h4>{song?.name}</h4>
            <p>{song?.artist}</p>
          </div>
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
            value={Math.round(volume * 100)}
            min={0}
            max={100}
            type="range"
            className="volume-range"
            onChange={(e) => volumeHandler(Number(e.target.value))}
          />
          <h3 className="volume-percentage">{Number(volume * 100)}%</h3>
        </div>
    </>
  );
};

export default Player;
