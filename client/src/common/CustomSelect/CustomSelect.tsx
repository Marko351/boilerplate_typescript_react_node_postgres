import React, { ChangeEvent } from 'react'

type optionType = { value: number; label: string }

interface CustomSelectProps {
  options: Array<optionType>
  name: string
  label: string
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
  value: number
  customClass?: string
}

export const CustomSelect: React.FC<CustomSelectProps> = ({ customClass, value, options, name, label, onChange }) => {
  return (
    <div className={`c-input ${customClass}`}>
      <label htmlFor={name} className='c-input__label'>
        {label}
      </label>
      <select className='c-input__input' name={name} onChange={onChange} value={value}>
        {options.map((option: optionType, index: number) => (
          <option key={index} value={option.value} className='appearance-none p-2'>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
