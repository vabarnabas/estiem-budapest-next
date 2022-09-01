import Image from "next/image"
import {
  FaFacebookMessenger,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa"

const Hero = () => {
  return (
    <div className="h-full w-full text-soft-green">
      <div className="relative flex h-full w-full items-center justify-center p-4">
        <div className="absolute flex flex-col items-center gap-x-12 px-4 sm:left-6 sm:flex-row">
          <div className="flex h-full flex-col justify-between">
            <div className="">
              <p className="text-center text-4xl font-bold sm:text-left sm:text-5xl">
                ESTIEM is the <br />
                Best Team
              </p>
              <p className="mt-1 text-center sm:text-left sm:text-base">
                Csatlakozz egy nagyszerű <br /> nemzetközi csapathoz!
              </p>
            </div>
            <button className="mt-4 w-full bg-soft-green px-3 py-1 text-white hover:bg-darker-green">
              Jelentkezek
            </button>
          </div>
        </div>
        <div className="absolute bottom-3 left-6 flex space-x-3 text-lg sm:text-xl">
          <FaFacebookSquare className="cursor-pointer hover:text-darker-green" />
          <FaFacebookMessenger className="cursor-pointer hover:text-darker-green" />
          <FaInstagramSquare className="cursor-pointer hover:text-darker-green" />
        </div>
      </div>
    </div>
  )
}

export default Hero
