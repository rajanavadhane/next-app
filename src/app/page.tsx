import { AboutMe } from "./components/AboutMe"
import { AnimatedProfilePic } from "./components/AnimatedProfilePic"
import { AnimatedText } from "./components/AnimatedText"
import { Connections } from "./components/Connections"
import { GridWrapper } from "./components/GridWrapper"
import { MyCalendar } from "./components/MyCalender"
import { MyToolbox } from "./components/MyToolbox"

export default async function Home() {
  const PROFILE_DELAY = 0
  const HEADING_DELAY = PROFILE_DELAY + 0.2
  const PARAGRAPH_DELAY = HEADING_DELAY + 0.1
  const PHOTOS_DELAY = PARAGRAPH_DELAY + 0.1

  return (
    <section>
      <AnimatedProfilePic delay={PROFILE_DELAY} />
      <div className="mt-6 space-y-10 md:mt-0 md:space-y-16">
        <section>
          <div className="relative text-balance">
            <GridWrapper>
              <AnimatedText
                as="h1"
                delay={HEADING_DELAY}
                className="mx-auto max-w-2xl text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]"
              >
                Hey, I&apos;m Rajan! <br /> Welcome to my corner of the
                internet!
              </AnimatedText>
            </GridWrapper>
            <GridWrapper>
              <div className="mt-4 text-center md:mt-8">
                <AnimatedText
                  as="p"
                  delay={PARAGRAPH_DELAY}
                  className="leading-8 text-text-secondary"
                >
                  I&apos;m a front-end developer with a habit of pushing pixels
                  and breaking things—lovingly. This site is where I test ideas,
                  collect inspiration, and build without a roadmap. If something
                  looks off... it's probably a feature, not a bug. This isn’t
                  just a portfolio—it’s a code lab, a journal, and a
                  never-ending commit history. Things get updated, undone, and
                  sometimes overengineered for no reason other than fun.
                </AnimatedText>
              </div>
            </GridWrapper>
          </div>
        </section>

        {/* About Section */}
        <section className="relative space-y-10 md:space-y-16">
          {/* <AboutPattern /> */}
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>About</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-lg text-balance text-center text-3xl font-medium leading-10 tracking-tight text-text-primary md:text-4xl">
                Here&apos;s what sets me apart and makes me unique
              </h2>
            </GridWrapper>
          </div>

          <GridWrapper>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-12 lg:grid-rows-[14]">
              <div className="col-span-1 md:col-span-5 lg:col-span-5 lg:row-span-6">
                <AboutMe linkTo="/about" />
              </div>

              <div className="md:col-span-12 lg:col-span-7 lg:row-span-8">
                <Connections linkTo="/connections" />
              </div>

              <div className="md:col-span-7 md:row-start-1 lg:col-span-5 lg:row-span-7">
                <MyToolbox linkTo="/toolbox" />
              </div>

              <div className="md:col-span-12 lg:col-span-7 lg:row-span-5">
                <MyCalendar />
              </div>
            </div>
          </GridWrapper>
        </section>
      </div>
    </section>
  )
}
