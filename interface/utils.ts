import type { Coordinate, GlobalCoordinate, Robot } from "./map"

export interface LocalToGlobal {
  localX: number
  localY: number
  localTopLeft: Coordinate
  localBottomRight: Coordinate
  globalTopLeft: GlobalCoordinate
  globalBottomRight: GlobalCoordinate
}

export interface GetPolygonPosition {
  robots: Robot[]
  localTopLeft: Coordinate
  localBottomRight: Coordinate
  globalTopLeft: GlobalCoordinate
  globalBottomRight: GlobalCoordinate
}
