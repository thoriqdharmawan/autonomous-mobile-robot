import Map from "@/components/map"
import { MapProvider } from "@/providers/MapProvider"

export default function Home() {
  return (
    <main>
      <MapProvider>
        <Map />
      </MapProvider>
    </main>
  )
}
