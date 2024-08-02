import InputSwitch from "@/components/customs/InputSwitch"
import { Slider } from "@/components/ui/slider"
import { useMapContext } from "@/providers/MapProvider"

export default function Navigations() {
  const { options, setOptions } = useMapContext()

  return (
    <div className="flex h-fit w-full flex-col gap-8 md:gap-12">
      <h1 className="text-xl font-semibold">BOTMIND FRONTEND DEVELOPER TECHNICAL CHALLENGE</h1>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <label className="cursor-pointer select-none text-sm">Robot Map Opacity</label>
          <Slider
            onValueChange={(value) => setOptions((prev) => ({ ...prev, robotMapOpacity: value[0] }))}
            defaultValue={[options.robotMapOpacity]}
            max={1}
            step={0.01}
          />
        </div>

        <InputSwitch
          id="show-robot-position"
          label="Show Robot Marker Position"
          checked={options.showRobotPosition}
          onCheckedChange={(checked) => setOptions((prev) => ({ ...prev, showRobotPosition: checked }))}
        />

        <InputSwitch
          id="show-robot-area"
          label="Show Robot Area"
          checked={options.showArea}
          onCheckedChange={(checked) => setOptions((prev) => ({ ...prev, showArea: checked }))}
        />
      </div>

      <small className="text-sm font-light italic leading-none">
        Tip: Hover on marker and area to show detail data
      </small>
    </div>
  )
}
