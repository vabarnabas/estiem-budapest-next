import React, { useState } from "react"
import { FaPollH } from "react-icons/fa"
import { HiMenu } from "react-icons/hi"

export interface MenuOption {
  title: string
  slug: string
  isSpecial: boolean
  visible: boolean
  icon?: JSX.Element
  action?: (...params: any) => void
}

const menuOptions: MenuOption[] = [
  {
    title: "Rólunk",
    slug: "about",
    isSpecial: false,
    visible: true,
  },
  {
    title: "Eseményeink",
    slug: "events",
    isSpecial: false,
    visible: true,
  },
  {
    title: "Támogatóink",
    slug: "sponsors",
    isSpecial: false,
    visible: true,
  },
  {
    title: "Felvételi",
    slug: "invitation",
    isSpecial: true,
    visible: true,
    icon: <FaPollH className="mr-1 text-sm" />,
  },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed inset-x-0 top-0 flex h-12 items-center justify-between bg-white px-6 shadow shadow-soft-green/10">
      <p className="font-bold italic text-soft-green">tESTIEM</p>
      <div className="hidden space-x-2 sm:flex">
        {menuOptions
          .filter((option) => option.visible)
          .map((option) => (
            <div
              key={option.slug}
              className={`${
                option.isSpecial
                  ? "bg-soft-green text-white hover:bg-darker-green"
                  : "text-soft-green hover:bg-soft-green hover:text-white"
              } flex cursor-pointer items-center justify-center px-3 py-1 text-sm font-medium duration-150 ease-in-out `}
            >
              <span>{option.icon && option.icon}</span>
              <p className="">{option.title}</p>
            </div>
          ))}
      </div>
      <div className="flex sm:hidden">
        <HiMenu
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer text-lg text-soft-green"
        />
        {isOpen && (
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="fixed inset-x-0 top-12 h-[100vh] bg-black/40"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="fixed inset-x-0 h-[80vh] space-y-3 bg-white py-2 px-4"
            >
              {menuOptions
                .filter((option) => option.visible)
                .map((option) => (
                  <div
                    key={option.slug}
                    className={`${
                      option.isSpecial
                        ? "bg-soft-green text-white hover:bg-darker-green"
                        : "text-soft-green hover:bg-soft-green hover:text-white"
                    } flex cursor-pointer items-center justify-center px-3 py-1 text-sm font-medium duration-150 ease-in-out `}
                  >
                    <span>{option.icon && option.icon}</span>
                    <p className="">{option.title}</p>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
