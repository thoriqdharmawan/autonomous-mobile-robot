import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { EARTH_RADIUS_KM } from "@/constant/map"
import type { GlobalCoordinate, PolygonPosition } from "@/interface/map"
import { GetPolygonPosition, LocalToGlobal } from "@/interface/utils"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const localToGlobal = (option: LocalToGlobal): GlobalCoordinate => {
  // Destructure properties from the option object for easier access
  const { localX, localY, localTopLeft, localBottomRight, globalTopLeft, globalBottomRight } = option

  // Calculate the width and height in local coordinates
  const localWidth = localBottomRight.x - localTopLeft.x
  const localHeight = localBottomRight.y - localTopLeft.y

  // Calculate the width and height in global coordinates
  const globalWidth = globalBottomRight.lon - globalTopLeft.lon
  const globalHeight = globalTopLeft.lat - globalBottomRight.lat

  // Compute the scaling factors for the x and y axes
  const scaleX = globalWidth / localWidth
  const scaleY = globalHeight / localHeight

  // Convert local coordinates to global coordinates
  const globalLon = globalTopLeft.lon + (localX - localTopLeft.x) * scaleX
  const globalLat = globalTopLeft.lat - (localY - localTopLeft.y) * scaleY

  // Return the converted global coordinates
  return { lat: globalLat, lon: globalLon }
}

export const getPolygonPosition = (options: GetPolygonPosition): PolygonPosition => {
  const { robots, localTopLeft, localBottomRight, globalTopLeft, globalBottomRight } = options

  const result: PolygonPosition = []

  robots.forEach((robot) => {
    const globalCoord = localToGlobal({
      localX: robot.x,
      localY: robot.y,
      localTopLeft,
      localBottomRight,
      globalTopLeft,
      globalBottomRight,
    })

    // @ts-ignore
    result.push([globalCoord.lat, globalCoord.lon])
  })

  return result
}

/**
 * Calculates the distance between two coordinates on the earth's surface.
 * @param {GlobalCoordinate} coord1 - The first coordinate point
 * @param {GlobalCoordinate} coord2 - The second coordinate point
 * @returns {number} The distance between the two points in kilometers
 */
export const haversineDistance = (coord1: GlobalCoordinate, coord2: GlobalCoordinate): number => {
  const toRadians = (degree: number): number => degree * (Math.PI / 180)

  const lat1 = toRadians(coord1.lat)
  const lon1 = toRadians(coord1.lon)
  const lat2 = toRadians(coord2.lat)
  const lon2 = toRadians(coord2.lon)

  const dLat = lat2 - lat1
  const dLon = lon2 - lon1

  const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  return EARTH_RADIUS_KM * c
}

/**
 * Calculates the area defined by multiple latitude and longitude points.
 * @param {GlobalCoordinate[]} coordinates - Array of coordinate points
 * @returns {number} The area in square kilometers
 */
export const calculateArea = (coordinates: GlobalCoordinate[]): number => {
  if (coordinates.length < 3) {
    throw new Error("At least three coordinate points are required to calculate area.")
  }

  let area = 0

  for (let i = 0; i < coordinates.length; i++) {
    const j = (i + 1) % coordinates.length

    const point1 = coordinates[i]
    const point2 = coordinates[j]

    // Convert latitude and longitude to radians
    const lat1 = point1.lat * (Math.PI / 180)
    const lon1 = point1.lon * (Math.PI / 180)
    const lat2 = point2.lat * (Math.PI / 180)
    const lon2 = point2.lon * (Math.PI / 180)

    // Calculate segment area using the determinant formula
    area += (lon2 - lon1) * (2 + Math.sin(lat1) + Math.sin(lat2))
  }

  // Multiply by the square of Earth's radius and convert result to square kilometers
  area = Math.abs((area * EARTH_RADIUS_KM * EARTH_RADIUS_KM) / 2)

  return area
}
