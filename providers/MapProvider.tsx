"use client"

import type { Dispatch, ReactNode, SetStateAction } from "react"
import { createContext, useContext, useState } from "react"

interface OptionUseMap {
  robotMapOpacity: number
  showRobotPosition: boolean
  showArea: boolean
}

interface MapContextData {
  options: OptionUseMap
  setOptions: Dispatch<SetStateAction<OptionUseMap>>
}

const MapContext = createContext<MapContextData | undefined>(undefined)

function useMapContext(): MapContextData {
  const context = useContext(MapContext)
  if (!context) {
    throw new Error("useMapContext must be used within a MapProvider")
  }
  return context
}

const MapProvider = ({ children }: { children: ReactNode }) => {
  const [options, setOptions] = useState<OptionUseMap>({
    robotMapOpacity: 0.2,
    showRobotPosition: true,
    showArea: true,
  })

  return <MapContext.Provider value={{ options, setOptions }}>{children}</MapContext.Provider>
}

export { MapProvider, useMapContext }
