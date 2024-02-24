export interface Track {
  name: string;
  cover: string;
  artist: string;
  audio: string;
  color: string[];
  id: string;
  active: boolean;
}

export interface MusicCardsProps {
  track: Track;
}

export interface Song {
  song: Track;
}

export interface PlayerProps {
  tracks: Track[];
  setTracks: (tracks: Track[]) => void;
  song: Track;
  setCurrentSong: (song: Track) => void;
  audioRef: React.RefObject<HTMLAudioElement>;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
}
