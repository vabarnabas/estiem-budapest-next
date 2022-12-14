import Image from "next/image"
import {
  FaFacebookMessenger,
  FaFacebookSquare,
  FaInstagram,
} from "react-icons/fa"
import { FormattedMessage } from "react-intl"

const Hero = () => {
  return (
    <div id="hero" className="h-full w-full text-white">
      <div className="relative flex h-full w-full items-center justify-center p-6">
        <div className="absolute h-full w-full">
          <div className="relative h-full w-full">
            <Image src="/images/cover2.jpg" layout="fill" objectFit="cover" />
            <div className="absolute inset-0 bg-soft-green/60"></div>
          </div>
        </div>
        <div className="absolute flex flex-col items-center justify-center px-4 sm:left-12 sm:flex-row sm:px-0">
          <div className="flex h-full flex-col items-center sm:items-start">
            <p className="max-w-[500px] text-center text-5xl font-bold sm:text-left sm:text-5xl">
              <FormattedMessage id="hero.title" />
            </p>
            <p className="mt-2 max-w-[250px] text-center text-lg leading-snug sm:text-left">
              <FormattedMessage id="hero.subtitle" />
            </p>
            {/* <button className="mt-3 flex w-max items-center justify-center rounded-md bg-white px-6 py-1.5 text-soft-green hover:bg-slate-100">
              <FaPollH className="mr-2 text-sm" />{" "}
              {formatMessage({ id: "hero.action" })}
            </button> */}
          </div>
        </div>

        <div className="absolute bottom-3 left-6 flex space-x-3 text-lg sm:left-12 sm:text-xl">
          <FaFacebookSquare className="cursor-pointer hover:text-slate-100" />
          <FaFacebookMessenger className="hover:text-slate-10 cursor-pointer" />
          <FaInstagram className="cursor-pointer hover:text-slate-100" />
        </div>
      </div>
    </div>
  )
}

export default Hero
