import { ExperienceData } from "../lib/experience/types"
import { Timeline } from "./Timeline"

const resumeData: ExperienceData = {
  experiences: [
    {
      company: "PharmaACE",
      period: "2024 - Present",
      positions: [
        {
          title: "Software Developer- React",
          description: [
            "I developed a complete application from the ground up, collaborating closely with product owners to translate Figma designs into responsive static pages. I then implemented dynamic functionality through API integration, conducted thorough unit testing, optimized performance, and managed the deployment process to deliver a scalable and reliable solution. Additionally, I contributed to building a reusable UI component library and a custom charts library tailored for healthcare clients, improving development efficiency and consistency across projects.",
          ],
        },
      ],
    },
    {
      company: "Firstzen Solutions Pvt. Ltd.",
      period: "2021 - 2024",
      positions: [
        {
          title: "Software Developer",
          description: [
            "As a Software Developer, I had the opportunity to work with international clients, focusing on delivering high-quality, user-centric applications. My work involved improving UI/UX designs, implementing code-splitting for better performance, and adhering to industry best practices to ensure scalable and maintainable codebases. I also contributed to building efficient, responsive interfaces that align with both user needs and business goals.",
          ],
        },

        {
          title: "Trainee Software Engineer",
          description: [
            "As a Trainee Engineer, I worked on converting Figma designs into pixel-perfect static web pages while ensuring full responsiveness across devices. I gained hands-on experience with modern frontend technologies, collaborated with senior developers, and developed a strong foundation in building user-friendly interfaces.",
          ],
        },
      ],
    },
  ],
  avatarUrl: "/Raj_headshot_05.jpg",
}

export function Experience() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative">
          <div className="divide-y divide-gray-100">
            {resumeData.experiences.map(experience => (
              <div
                key={experience.company}
                className="grid grid-cols-[1fr,5fr] gap-6 py-12 first:pt-0 last:pb-0 md:grid-cols-[2fr,1fr,4fr]"
              >
                <div className="hidden md:block">
                  <h3 className="text-xl font-medium">{experience.company}</h3>
                  <p className="text-sm text-gray-600">{experience.period}</p>
                </div>

                <div />

                <div className="space-y-6">
                  {experience.positions.map((position, index) => (
                    <div
                      key={`${experience.company}-${index}`}
                      className="space-y-4"
                    >
                      <h4 className="text-lg font-semibold">
                        {position.title}
                      </h4>
                      <div className="space-y-3">
                        {position.description.map((desc, i) => (
                          <p key={i} className="text-gray-600">
                            {desc}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="absolute top-0 h-full w-8 md:left-[calc(28%_-_1rem)]">
            <Timeline avatarUrl={resumeData.avatarUrl} />
          </div>
        </div>
      </div>
    </div>
  )
}
