import Image from "next/image"
import {
  FaFacebookMessenger,
  FaFacebookSquare,
  FaInstagram,
} from "react-icons/fa"
import { HiSearch } from "react-icons/hi"
import { FormattedMessage } from "react-intl"
import EventCard from "../event-card"

const Events = () => {
  return (
    <div id="events" className="w-full text-white lg:h-full">
      <div className="relative flex h-full w-full items-center justify-center p-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <EventCard
            src="/images/case_study.jpg"
            title="TIMES"
            subtitle="TIMES is a yearly case study competition, where students can compete in different challenges regarding the engineering world."
          />
          <EventCard
            src="/images/case_study.jpg"
            title="TIMES"
            subtitle="TIMES is a yearly case study competition, where students can compete in different challenges regarding the engineering world."
          />
          <EventCard
            src="/images/case_study.jpg"
            title="TIMES"
            subtitle="TIMES is a yearly case study competition, where students can compete in different challenges regarding the engineering world."
          />
          <EventCard
            src="/images/case_study.jpg"
            title="TIMES"
            subtitle="TIMES is a yearly case study competition, where students can compete in different challenges regarding the engineering world."
          />
          <EventCard
            src="/images/case_study.jpg"
            title="TIMES"
            subtitle="TIMES is a yearly case study competition, where students can compete in different challenges regarding the engineering world."
          />
          <EventCard
            src="/images/case_study.jpg"
            title="TIMES"
            subtitle="TIMES is a yearly case study competition, where students can compete in different challenges regarding the engineering world."
          />
          <EventCard
            src="/images/case_study.jpg"
            title="TIMES"
            subtitle="TIMES is a yearly case study competition, where students can compete in different challenges regarding the engineering world."
          />
          <EventCard
            src="/images/case_study.jpg"
            title="TIMES"
            subtitle="TIMES is a yearly case study competition, where students can compete in different challenges regarding the engineering world."
          />
        </div>
      </div>
    </div>
  )
}

export default Events
