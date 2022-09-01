import React from "react"
import { FaFacebookSquare, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center justify-between bg-soft-green py-4 px-6 text-white sm:flex-row">
      <p className="text-sm">Copyright © 2022 | ESTIEM Budapest BME</p>
      <div className="mt-4 flex items-center justify-center space-x-5 sm:mt-0">
        <p className="cursor-pointer text-sm hover:underline">Facebook</p>
        <p className="cursor-pointer text-sm hover:underline">Messenger</p>
        <p className="cursor-pointer text-sm hover:underline">Kapcsolat</p>
      </div>
    </div>
  )
}

export default Footer
