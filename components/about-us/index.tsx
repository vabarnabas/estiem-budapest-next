import React from "react"
import NumberCard from "../number-card"

const AboutUs = () => {
  return (
    <div id="about-us" className="w-full text-white sm:h-full">
      <div className="relative flex h-full w-full flex-col items-center justify-center py-8 px-6 sm:flex-row sm:gap-x-12 sm:px-12">
        <div className="grid w-max grid-cols-2 gap-6 gap-y-10 sm:gap-x-10">
          <NumberCard value={80} subtitle="Országban vagyunk jelen" />
          <NumberCard value={80} subtitle="Országban vagyunk jelen" />
          <NumberCard value={80} subtitle="Országban vagyunk jelen" />
          <NumberCard value={80} subtitle="Országban vagyunk jelen" />
        </div>
        <div className="mt-12 flex w-fit flex-col text-slate-500 sm:mt-0 sm:text-base">
          <p className="mb-2 text-xl font-semibold text-soft-green">Rólunk</p>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            tincidunt est sed dictum hendrerit. Praesent in fringilla ante, eget
            vulputate nisl. Nullam sit amet leo et urna vehicula mollis vitae ac
            eros. Nullam ex tortor, laoreet eu leo vitae, viverra posuere risus.
            Curabitur sit amet gravida purus. Vestibulum in dolor hendrerit,
            maximus ex sed, rhoncus augue. Suspendisse rutrum nunc at tincidunt
            rhoncus. In sit amet semper orci. Donec auctor nibh eget ornare
            porttitor. Quisque in sodales ligula. In a dui non nunc imperdiet
            scelerisque vel et quam. Fusce quis diam fringilla, egestas nulla
            ut, congue sem. Aliquam est ante, viverra eget suscipit at,
            venenatis vitae sapien.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
