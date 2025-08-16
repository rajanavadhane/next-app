"use client"

import useSWR from "swr"
import { MyCard } from "./MyCard"
import Image from "next/image"
import { motion } from "framer-motion"
import { CurrentlyPlaying } from "../lib/experience/types"

const favorite: CurrentlyPlaying = {
  artist: "Avicii",
  albumName: "The Days/Nights",
  albumId: "0h2knr6qpiAq0tV5ri5JMF",
  artistId: "1vCWHaC5f2uS3yhpwWbIA6",
  title: "The Nights",
  albumImageUrl:
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pxfuel.com%2Fen%2Fdesktop-wallpaper-aolkg&psig=AOvVaw0OS7sRjG7d9pVo40q7lixh&ust=1755445736361000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJD0uZ7Xj48DFQAAAAAdAAAAABAE",
  songUrl: "https://open.spotify.com/track/0ct6r3EGTcMLPtrXHDvVjc",
  isPlaying: false,
}

export function CurrentlyPlayingSong() {
  const { data: playing, isLoading } = useSWR(
    "currently-playing",
    // getCurrentlyPlaying,
    {
      revalidateOnFocus: true,
      refreshInterval: 60000,
    }
  )

  if (isLoading) {
    return (
      <div className="group relative col-span-5 row-span-6 flex h-[220px] flex-col overflow-hidden rounded-2xl border border-border-primary p-6 hover:bg-white">
        <p className="animate-pulse text-base text-text-primary">
          Loading music...
        </p>
      </div>
    )
  }

  const currentTrack = playing || favorite
  const isCurrentlyPlaying = !!playing
  return (
    <MyCard height="h-[300px]">
      <div className="flex flex-col">
        <div className="z-10 h-full">
          <div className="flex h-full flex-col justify-between">
            <h2 className="mb-2 text-base font-medium">
              {isCurrentlyPlaying ? "Currently Playing" : "Recent Favorite"}
            </h2>
            <p className="max-h-[150px] overflow-hidden text-base text-text-secondary">
              <span className="line-clamp-4 text-ellipsis">
                I&apos;m listening to{" "}
                <a className="font-semibold" href={currentTrack.songUrl}>
                  {currentTrack.title}
                </a>{" "}
                by{" "}
                <a
                  className="font-semibold"
                  href={`https://open.spotify.com/artist/${currentTrack.artistId}`}
                >
                  {currentTrack.artist}
                </a>{" "}
                from the album{" "}
                <a
                  className="font-semibold"
                  href={`https://open.spotify.com/album/${currentTrack.albumId}`}
                >
                  {currentTrack.albumName}
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src="/the_nights_musicPlayer.jpg"
            alt="The Nights Album Cover"
            width={230}
            height={200}
            className="mt-4 w-fit h-fit rounded-lg object-cover"
          />
        </motion.div>
      </div>
    </MyCard>
  )
}
