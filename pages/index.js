import React from "react"
import Head from "next/head"
import Headers from "../components/Header"
import Icons from "../components/Icons"
import { useDispatch } from "react-redux"
import Filters from "../components/Filters"

export const getStaticProps = async () => {
  const response = await fetch(
    "https://api.iconfinder.com/v4/icons/search?query=home&count=100",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer 4o9Y745juM7tF4zsinZMIpfCNwKTrPnRbW0tdwicqbNGAjHhsAjU1P0CtCbkVTJJ",
      },
    }
  )
  const json = await response.json()

  return {
    props: { json },
  }
}

export default function Home({ json }) {
  const dispatch = useDispatch()
  if (json) {
    dispatch({
      type: "SET_ICONS",
      payload: json,
    })
  }
  return (
    <div className="min-h-screen bg-gray-200">
      <Head>
        <title>Icon Picker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white w-[80%] min-h-screen relative left-2/4 -translate-x-2/4  shadow-2xl flex lg:justify-between flex-col lg:flex-row  ">
        <div className="lg:w-[500px] min-h-screen border-r border-blue-700">
          <Headers />
          <Filters />
        </div>
        <div className=" lg:flex-auto">
          <Icons />
        </div>
      </main>
    </div>
  )
}
