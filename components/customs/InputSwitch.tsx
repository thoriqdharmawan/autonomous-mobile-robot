import { Switch } from "../ui/switch"

interface Props {
  label: string
  id: string

  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

export default function InputSwitch(props: Props) {
  const { label, id, checked, onCheckedChange } = props

  return (
    <div className="flex items-center space-x-4">
      <Switch onCheckedChange={onCheckedChange} checked={checked} id={id} />
      <label className="cursor-pointer select-none text-sm" htmlFor={id}>
        {label}
      </label>
    </div>
  )
}
