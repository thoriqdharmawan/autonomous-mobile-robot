"use client"

import { useEffect, useMemo } from "react"
import { MapContainer, ImageOverlay, Marker, TileLayer, Polygon, Tooltip } from "react-leaflet"
import L, { type LatLngBoundsExpression } from "leaflet"
import "leaflet/dist/leaflet.css"
import { MoveUp } from "lucide-react"
import {
  CAMPUS_SIM,
  GLOBAL_BOTTOM_RIGHT,
  GLOBAL_TOP_LEFT,
  LOCAL_BOTTOM_RIGHT,
  LOCAL_TOP_LEFT,
  MAP_CENTER,
  ROBOTS,
} from "@/constant/map"
import { calculateArea, getPolygonPosition, localToGlobal } from "@/lib/utils"
import { useMapContext } from "@/providers/MapProvider"
import "./map.css"

const MapView = () => {
  const { options } = useMapContext()

  const bounds: LatLngBoundsExpression = [
    [GLOBAL_TOP_LEFT.lat, GLOBAL_TOP_LEFT.lon, 20],
    [GLOBAL_BOTTOM_RIGHT.lat, GLOBAL_BOTTOM_RIGHT.lon, 20],
  ]

  const polygon = useMemo(() => {
    return getPolygonPosition({
      robots: ROBOTS,
      globalBottomRight: GLOBAL_BOTTOM_RIGHT,
      globalTopLeft: GLOBAL_TOP_LEFT,
      localBottomRight: LOCAL_BOTTOM_RIGHT,
      localTopLeft: LOCAL_TOP_LEFT,
    })
  }, [ROBOTS, GLOBAL_BOTTOM_RIGHT, GLOBAL_TOP_LEFT, LOCAL_BOTTOM_RIGHT, LOCAL_TOP_LEFT])

  const area = useMemo(() => {
    const coordinates = polygon?.map((coord) => ({ lat: coord[0], lon: coord[1] }))

    // @ts-ignore
    return `${calculateArea(coordinates).toFixed(3) || 0}km²`
  }, [polygon])

  useEffect(() => {
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
      iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    })
  }, [])

  return (
    <MapContainer className="h-[320px] w-full md:h-full" center={MAP_CENTER} zoom={18}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <ImageOverlay opacity={options.robotMapOpacity} url={CAMPUS_SIM} bounds={bounds} />

      {options.showArea && (
        <Polygon positions={polygon}>
          <Tooltip sticky>{area}</Tooltip>
        </Polygon>
      )}

      {options.showRobotPosition &&
        ROBOTS.map((robot) => {
          const globalCoord = localToGlobal({
            localX: robot.x,
            localY: robot.y,
            localTopLeft: LOCAL_TOP_LEFT,
            localBottomRight: LOCAL_BOTTOM_RIGHT,
            globalTopLeft: GLOBAL_TOP_LEFT,
            globalBottomRight: GLOBAL_BOTTOM_RIGHT,
          })

          return (
            <Marker key={robot.id} position={[globalCoord.lat, globalCoord.lon]}>
              <Tooltip>
                <div className="mb-2">
                  <p>Robot: {robot.id}</p>
                  <p>
                    Local Position: {robot.x}, {robot.y}
                  </p>
                  <p>
                    Global Position: {globalCoord.lat}, {globalCoord.lon}
                  </p>
                  <p>Heading: {robot.heading}°</p>
                </div>

                <MoveUp className={`rotate-[${robot.heading}deg]`} />
              </Tooltip>
            </Marker>
          )
        })}
    </MapContainer>
  )
}

export default MapView
