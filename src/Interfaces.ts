export interface Track {
    name: string,
    cover: string,
    artist: string,
    audio: string,
    color: string[],
    id: string,
    active: boolean
}

export interface MusicCardsProps {
    track: Track;
  }