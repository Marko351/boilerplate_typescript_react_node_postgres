import React, { ChangeEvent, KeyboardEvent } from 'react'

interface CustomInputProps {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  name: string
  label?: string
  placeholder: string
  customClass?: string
  type?: string
  errorMess?: string
  disabled?: boolean
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
}

export const CustomInput: React.FC<CustomInputProps> = ({
  customClass,
  placeholder,
  value,
  onChange,
  name,
  label,
  errorMess,
  type,
  onKeyDown,
}) => {
  return (
    <div className={`c-input ${customClass}`}>
      {label && (
        <label htmlFor={name} className='c-input__label'>
          {label}
        </label>
      )}
      <input
        className='c-input__input'
        type={type || 'text'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        onKeyDown={onKeyDown}
      />
      {!!errorMess && <small className='c-input__error'>{errorMess}</small>}
    </div>
  )
}
