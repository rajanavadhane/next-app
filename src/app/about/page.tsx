import clsx from "clsx"
import { div } from "framer-motion/client"
import Image from "next/image"
import { GridWrapper } from "../components/GridWrapper"
import { getTimeOfDayGreeting } from "../lib/utils"
import { Photo } from "@/app/components/Photo"
import { Experience } from "../components/Experience"
import { CurrentlyPlayingSong } from "../components/CurrentlyPlaying"
import { CurrentlyReading } from "../components/CurrentlyReading"

export default function AboutPage() {
  const timeOfDayGreeting = getTimeOfDayGreeting()
  return (
    <div className="relative mt-14">
      <title>About | Rajan Avadhane</title>

      <div className="relative space-y-10 md:space-y-16">
        <GridWrapper className="space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-around lg:px-24">
            <div className="order-2 mx-auto max-w-lg lg:order-1 lg:m-0 lg:max-w-3xl lg:pr-12">
              <div className="text-center text-sm font-medium text-indigo-600 lg:text-left">
                <span> {timeOfDayGreeting}</span>
              </div>
              <h1 className="mx-auto max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-5xl lg:text-left lg:text-6xl lg:leading-[64px]">
                I&apos;m Rajan, a Full Stack Dev on an AI Journey.
              </h1>
            </div>

            <div className="order-1 my-12 flex-shrink-0 lg:order-2 lg:my-0">
              <div className="relative mx-auto w-full max-w-[400px]">
                <div className="relative grid grid-cols-3">
                  <div className="relative z-20 -translate-y-2">
                    <Photo
                      width={140}
                      height={140}
                      src="/raj_headshot_04.jpg"
                      alt="Rajan Avadhane"
                      direction="left"
                    />
                  </div>
                  <div className="relative z-30">
                    <Photo
                      width={140}
                      height={140}
                      src="/raj_headshot_03.jpg"
                      alt="Rajan Avadhane"
                      direction="right"
                    />
                  </div>
                  <div className="relative z-20 translate-y-4">
                    <Photo
                      width={140}
                      height={140}
                      src="/raj_headshot_02.jpg"
                      alt="Rajan Avadhane"
                      direction="left"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GridWrapper>

        <div className="  m-5 ">
          {/* <h1
            className={clsx(
              "font-bold",
              "text-[clamp(26px,5vw,var(--fz-heading))]",
              "m-5"
            )}
          >
            About Me :
          </h1> */}
          <GridWrapper>
            <div className="ml-5 text-center text-sm font-medium text-indigo-600">
              <span>About Me :</span>
            </div>
          </GridWrapper>

          <div className="flex m-5 gap-5">
            <div>
              <h4>
                I'm a young , prolific and growing Software Developer with a
                flair for creating elegant solutions in the least amount of
                time. In my technical career I always believe in 3 I's: Intent,
                Interact and Impact/Influence. I believe that if we have intent
                for doing something, we surely can do it. With intent we can
                build our reality . I am eager to bring my enthusiasm and
                dedication to any project or team I am a part of.I am constantly
                learning and staying up-to-date with the latest technologies.I
                aim and work to establish myself as a BRAND in this technical
                industry.
              </h4>
            </div>
          </div>
        </div>
        <div className="relative space-y-8 text-center">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>Experience</span>
              </div>
            </GridWrapper>
          </div>
        </div>

        <div className="space-y-16">
          <GridWrapper>
            <Experience />
          </GridWrapper>
        </div>

        <section className="relative space-y-16">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>More</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-lg text-balance text-center text-3xl font-medium leading-10 tracking-tight text-text-primary">
                Here&apos;s what sets me apart and makes me unique
              </h2>
            </GridWrapper>
          </div>

          <GridWrapper>
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-12">
              <div className="lg:col-span-3 lg:row-span-6">
                <CurrentlyPlayingSong />
              </div>
              {/* <div className="hidden lg:col-span-7 lg:row-span-5 lg:block">
                <ScrapbookBento />
              </div> */}
              <div className="hidden lg:col-span-2 lg:col-start-11 lg:row-span-10 lg:block lg:min-h-[50px]">
                <CurrentlyReading />
              </div>
              {/* <div className="lg:col-span-7 lg:row-span-8">
                <ConnectionsBento linkTo="/connections" />
              </div> */}

              {/* <div className="lg:col-span-3 lg:row-span-4">
                <StatsBento />
              </div> */}
            </div>
          </GridWrapper>
        </section>
      </div>
    </div>
  )
}
