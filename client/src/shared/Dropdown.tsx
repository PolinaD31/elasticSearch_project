type Props = {
  value: string | number
  name: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: string[]
  text: string
}

const Dropdown = ({ value, name, options, text, onChange }: Props) => {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="select select-bordered w-full"
    >
      <option value="">{text}</option>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  )
}

export default Dropdown
