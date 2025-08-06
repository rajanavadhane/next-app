"use client"

import { ProfilePic } from "./ProfilePic"
import { motion } from "framer-motion"

interface AnimatedProfilePictureProps {
  delay?: number
}

export function AnimatedProfilePic({ delay = 0 }: AnimatedProfilePictureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
        delay,
      }}
    >
      <ProfilePic />
    </motion.div>
  )
}
