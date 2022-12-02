import Image from "next/image"
import React from "react"
import { HiSearch } from "react-icons/hi"

interface Props {
  title: string
  subtitle: string
  src: string
}

const EventCard: React.FC<Props> = ({ src, subtitle, title }) => {
  return (
    <div className="group relative h-48 w-72 cursor-pointer overflow-hidden rounded-md transition-all duration-300 ease-in-out hover:scale-[1.03] sm:aspect-square sm:h-64 sm:w-64">
      <div className="relative h-full w-full">
        <Image src={src} layout="fill" objectFit="cover" />
      </div>
      <div className="absolute inset-0 bg-soft-green/70 p-4 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
        <p className="text-2xl font-bold">{title}</p>
        <p className="mt-4 text-sm">{subtitle}</p>
      </div>
    </div>
  )
}

export default EventCard
