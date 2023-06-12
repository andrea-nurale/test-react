import { InputHTMLAttributes } from "react"
import {  useFormContext } from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  name: string
}

const Input = ({ placeholder, type = "text", label, error, name, ...rest }: Props) => {
    const { register } = useFormContext();
  return (
    <div>
      <label className="block wtext-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <input

          placeholder={placeholder}
          type={type}
          className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          {...register(name)}
          {...rest}
        />
      </div>
      <div style={{ color: "red" }}>{error}</div>
    </div>
  )
}

export default Input
