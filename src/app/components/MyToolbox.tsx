import Image from "next/image"
import { softwareData } from "../data/toolbox"
import { MyCard } from "./MyCard"

const items = softwareData
  .map((item, index) => (
    <div className="group inline-block text-center">
      <div
        key={item.title || index}
        className={`rounded-[20px] border border-border-primary p-2 transition-all duration-500 group-hover:border-indigo-400 ${
          index === 2
            ? "delay-0 group-hover:-translate-y-3"
            : index === 1 || index === 3
            ? "delay-100 group-hover:-translate-y-3"
            : "delay-200 group-hover:-translate-y-3"
        }`}
        style={{
          width: index === 2 ? 130 : 110,
          height: index === 2 ? 130 : 110,
        }}
      >
        <div
          className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
          style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
        >
          <Image width={40} height={40} alt={item.title} src={item.imgSrc} />
        </div>
      </div>
    </div>
  ))
  .slice(0, 5)

export function MyToolbox({ linkTo }: { linkTo?: string }) {
  return (
    <MyCard linkTo={linkTo} height="md:h-[304px] lg:h-[300px]">
      <div className="group-hover:from-bg-white absolute inset-y-0 left-0 z-20 w-1/5 bg-gradient-to-r from-bg-primary to-transparent"></div>
      <div className="group-hover:from-bg-white absolute inset-y-0 right-0 z-20 w-1/5 bg-gradient-to-l from-bg-primary to-transparent"></div>
      <div className="z-20 text-center">
        <h2 className="text-base font-medium">Toolbox</h2>
        <p className="mt-1 text-text-secondary">
          Check out my favorite tools and spots around the web.
        </p>
      </div>
      <div className="mt-10 flex items-center justify-center gap-3 transition-all duration-500 ease-in-out md:mt-12">
        {items}
      </div>
    </MyCard>
  )
}
