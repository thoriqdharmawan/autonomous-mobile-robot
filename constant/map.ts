import type { LatLngExpression } from "leaflet"
import type { Coordinate, GlobalCoordinate, Robot } from "@/interface/map"

export const ROBOTS: Robot[] = [
  { id: "001", x: 406, y: 334, heading: 0 },
  { id: "003", x: 922, y: 946, heading: 240 },
  { id: "002", x: 1101, y: 613, heading: 60 },
  { id: "004", x: 863, y: 324, heading: 330 },
]

export const MAP_CENTER: LatLngExpression = [1.300463, 103.78013]

export const CAMPUS_SIM: string = "https://i.imgur.com/DBybl0s.png"

export const LOCAL_TOP_LEFT: Coordinate = { x: 0, y: 0 }
export const LOCAL_BOTTOM_RIGHT: Coordinate = { x: 1629, y: 1245 }

export const GLOBAL_TOP_LEFT: GlobalCoordinate = { lat: 1.301665, lon: 103.778236 }
export const GLOBAL_BOTTOM_RIGHT: GlobalCoordinate = { lat: 1.298935, lon: 103.781825 }

export const EARTH_RADIUS_KM: number = 6371 // Earth's radius in kilometers
