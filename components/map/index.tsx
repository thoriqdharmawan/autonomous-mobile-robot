"use client"

import dynamic from "next/dynamic"
import Navigations from "./Navigations"

const MapView = dynamic(() => import("./MapView"), { ssr: false })

export default function Map() {
  return (
    <div className="grid min-h-screen grid-cols-1 gap-2 p-12 md:grid-cols-12 md:gap-12">
      <div className="col-span-12 h-full md:col-span-8">
        <MapView />
      </div>

      <div className="col-span-12 md:col-span-4">
        <Navigations />
      </div>
    </div>
  )
}
