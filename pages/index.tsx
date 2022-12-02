import type { NextPage } from "next"
import Head from "next/head"
import AboutUs from "../components/about-us"
import Events from "../components/events"
import Footer from "../components/footer"
import Hero from "../components/hero"
import Navbar from "../components/navbar"

const Home: NextPage = () => {
  return (
    <div className="flex h-screen w-screen select-none flex-col scrollbar-hide">
      <Head>
        <title>ESTIEM Budapest BME</title>
        <meta name="description" content="Created by Barnabas Varga" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" h-full flex-col scrollbar-hide">
        <Hero />
        <AboutUs />
        <Events />
        <Footer />
      </div>
      <Navbar />
    </div>
  )
}

export default Home
