export interface Position {
  title: string
  description: string[]
}

export interface Experience {
  company: string
  period: string
  positions: Position[]
}

export interface ExperienceData {
  experiences: Experience[]
  avatarUrl: string
}

export type CurrentlyPlaying = {
  artist: string
  albumName: string
  albumId: string
  artistId: string
  title: string
  albumImageUrl: string
  songUrl: string
  isPlaying: boolean
}
