import React from "react"

interface Props {
  subtitle: string
  value: number
}

const NumberCard: React.FC<Props> = ({ subtitle, value }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <p className="text-6xl font-bold text-soft-green sm:text-7xl">{value}</p>
      <p className="break-words text-sm text-slate-600 sm:text-sm">
        {subtitle}
      </p>
    </div>
  )
}

export default NumberCard
