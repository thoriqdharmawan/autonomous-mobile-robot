import type { LatLngExpression } from "leaflet"

export interface Coordinate {
  x: number
  y: number
}

export interface GlobalCoordinate {
  lat: number
  lon: number
}

export interface Robot {
  id: string
  x: number
  y: number
  heading: number
}

export type PolygonPosition = LatLngExpression[][]
