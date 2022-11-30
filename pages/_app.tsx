import "../styles/globals.css"
import type { AppProps } from "next/app"
import { useEffect, useMemo, useState } from "react"
import Cookies from "universal-cookie"
import English from "../lang/en.json"
import Hungarian from "../lang/hu.json"
import { IntlProvider } from "react-intl"

function MyApp({ Component, pageProps }: AppProps) {
  const cookies = new Cookies()
  const [langCookie, setLangCookie] = useState(
    cookies.get("estiem.lang.key") || "hu"
  )

  const messages = useMemo(() => {
    switch (langCookie) {
      case "hu":
        return Hungarian
      case "en":
        return English
      default:
        return Hungarian
    }
  }, [langCookie])

  useEffect(() => {
    setLangCookie(cookies.get("estiem.lang.key") || "hu")
  }, [cookies.get("estiem.lang.key")])

  return (
    <IntlProvider locale={langCookie} messages={messages} onError={() => null}>
      <Component {...pageProps} />
    </IntlProvider>
  )
}

export default MyApp
