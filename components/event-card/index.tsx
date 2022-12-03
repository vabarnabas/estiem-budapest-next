import React from "react"
import { IoIosPaper } from "react-icons/io"

interface Props {
  title: string
  subtitle: string
  icon: JSX.Element
}

const EventCard: React.FC<Props> = ({ subtitle, title, icon }) => {
  return (
    <div className="group relative w-full cursor-pointer overflow-hidden rounded-md bg-soft-green">
      <div className="absolute flex h-full w-full items-center justify-end">
        {icon}
      </div>
      <div className="p-4">
        <p className="text-2xl font-bold">{title}</p>
        <p className="mt-4 text-sm">{subtitle}</p>
      </div>
    </div>
  )
}

export default EventCard
