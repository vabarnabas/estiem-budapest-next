import "../styles/globals.css"
import type { AppProps } from "next/app"
import { useMemo } from "react"
import English from "../lang/en.json"
import Hungarian from "../lang/hu.json"
import { IntlProvider } from "react-intl"
import { useRouter } from "next/router"

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter()
  const [shortLocale] = locale ? locale.split("-") : ["hu"]

  const messages = useMemo(() => {
    switch (shortLocale) {
      case "hu":
        return Hungarian
      case "en":
        return English
      default:
        return Hungarian
    }
  }, [shortLocale])

  return (
    <IntlProvider locale={shortLocale} messages={messages} onError={() => null}>
      <Component {...pageProps} />
    </IntlProvider>
  )
}

export default MyApp
