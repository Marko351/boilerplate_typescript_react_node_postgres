import React, { ChangeEvent } from 'react';

interface CustomInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  error?: boolean;
  disabled?: boolean;
}

export const CustomInput: React.FC<CustomInputProps> = ({ placeholder, value, onChange, name, label, error, type }) => {
  return (
    <div className='c-input'>
      <label htmlFor={name} className='c-input__label'>
        {label}
      </label>
      <input
        className='c-input__input'
        type={type || 'text'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
      {error && <small>{`${label} is required`}</small>}
    </div>
  );
};
