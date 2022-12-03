import { useRouter } from "next/router"
import React, { useState } from "react"
import { FaPollH } from "react-icons/fa"
import { HiMenu } from "react-icons/hi"
import { useIntl } from "react-intl"
import { Link } from "react-scroll"

export interface MenuOption {
  title: string
  slug: string
  isSpecial: boolean
  visible: boolean
  icon?: JSX.Element
  action?: (...params: any) => void
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const { formatMessage } = useIntl()

  const menuOptions: MenuOption[] = [
    {
      title: formatMessage({ id: "navbar.about-us" }),
      slug: "about-us",
      isSpecial: false,
      visible: true,
    },
    {
      title: formatMessage({ id: "navbar.events" }),
      slug: "events",
      isSpecial: false,
      visible: true,
    },
    {
      title: formatMessage({ id: "navbar.sponsors" }),
      slug: "sponsors",
      isSpecial: false,
      visible: true,
    },
  ]

  return (
    <div className="fixed inset-x-0 top-0 flex h-12 items-center justify-between bg-white px-6 shadow shadow-soft-green/10 sm:px-12">
      <p className="font-bold italic text-soft-green">tESTIEM</p>
      <div className="hidden space-x-2 sm:flex">
        {menuOptions
          .filter((option) => option.visible)
          .filter((option) => !option.isSpecial)
          .map((option) => (
            <Link
              key={option.slug}
              activeClass="active"
              to={option.slug}
              spy={true}
              smooth={true}
              offset={-48}
              duration={500}
            >
              <div
                className={`${
                  option.isSpecial
                    ? "bg-soft-green text-white hover:bg-darker-green"
                    : "text-soft-green hover:bg-soft-green hover:text-white"
                } flex cursor-pointer items-center justify-center rounded-md px-4 py-1.5 text-sm font-medium duration-150 ease-in-out `}
              >
                <span>{option.icon && option.icon}</span>
                <p className="">{option.title}</p>
              </div>
            </Link>
          ))}
      </div>
      <div className="flex space-x-2 text-sm">
        <p
          onClick={() =>
            router.push(router.pathname, router.pathname, { locale: "hu-HU" })
          }
          className={`cursor-pointer ${
            router.locale === "hu-HU" ? "text-soft-green" : ""
          }`}
        >
          HU
        </p>
        <p
          onClick={() =>
            router.push(router.pathname, router.pathname, { locale: "en-US" })
          }
          className={`cursor-pointer ${
            router.locale === "en-US" ? "text-soft-green" : ""
          }`}
        >
          EN
        </p>
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
              className="fixed inset-x-0 flex h-[70vh] flex-col items-center justify-between space-y-3 bg-white py-4 px-4"
            >
              <div className="w-full space-y-2">
                {menuOptions
                  .filter((option) => option.visible)
                  .filter((option) => !option.isSpecial)

                  .map((option) => (
                    <Link
                      onClick={() => setIsOpen(false)}
                      key={option.slug}
                      activeClass="active"
                      to={option.slug}
                      spy={true}
                      smooth={true}
                      offset={-48}
                      duration={500}
                    >
                      <div
                        className={`${
                          option.isSpecial
                            ? "bg-soft-green text-white hover:bg-darker-green"
                            : "text-soft-green hover:bg-soft-green hover:text-white"
                        } flex cursor-pointer items-center justify-center rounded-md py-2 px-3 font-medium duration-150 ease-in-out `}
                      >
                        <span>{option.icon && option.icon}</span>
                        <p className="">{option.title}</p>
                      </div>
                    </Link>
                  ))}
              </div>
              <div className="w-full">
                {menuOptions
                  .filter((option) => option.visible)
                  .filter((option) => option.isSpecial)
                  .map((option) => (
                    <div
                      key={option.slug}
                      className={`${
                        option.isSpecial
                          ? "bg-soft-green text-white hover:bg-darker-green"
                          : "text-soft-green hover:bg-soft-green hover:text-white"
                      } flex cursor-pointer items-center justify-center rounded-md px-3 py-2 font-medium duration-150 ease-in-out`}
                    >
                      <span>{option.icon && option.icon}</span>
                      <p className="">{option.title}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
