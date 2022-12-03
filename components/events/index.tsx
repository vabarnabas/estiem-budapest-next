import Image from "next/image"
import {
  FaFacebookMessenger,
  FaFacebookSquare,
  FaInstagram,
} from "react-icons/fa"
import { HiSearch } from "react-icons/hi"
import { IoIosPaper } from "react-icons/io"
import { FormattedMessage } from "react-intl"
import EventCard from "../event-card"

const Events = () => {
  const events = [
    {
      title: "TIMES",
      subtitle:
        "TIMES is a local and international case study competition. Lorem ipsum dolor sit amet.",
      icon: <IoIosPaper className="h-full w-full opacity-10" />,
    },
  ]

  return (
    <div id="events" className="w-full text-white lg:h-full">
      <div className="relative flex h-full w-full items-center justify-center p-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard {...event} key={event.title} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Events
