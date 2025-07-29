import { AnimatedProfilePic } from "./components/AnimatedProfilePic"

export default async function Home() {
  const PROFILE_DELAY = 0
  const HEADING_DELAY = PROFILE_DELAY + 0.2
  const PARAGRAPH_DELAY = HEADING_DELAY + 0.1
  const PHOTOS_DELAY = PARAGRAPH_DELAY + 0.1

  return (
    <section>
      <AnimatedProfilePic delay={PROFILE_DELAY} />
      <div>bjjk</div>
    </section>
  )
}
