import React, { ChangeEvent } from 'react';

interface CustomInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  label: string;
  type?: string;
  error?: boolean;
  disabled?: boolean;
}

export const CustomInput: React.FC<CustomInputProps> = ({ value, onChange, name, label, error, type }) => {
  return (
    <div className='flex flex-col w-full'>
      <label htmlFor={name} className='mb-1 text-gray-800'>
        {label}
      </label>
      <input
        className='w-full border rounded px-2 py-1 focus:outline-none focus:shadow-outline text-gray-700'
        type={type || 'text'}
        value={value}
        onChange={onChange}
        name={name}
      />
      {error && <small>{`${label} is required`}</small>}
    </div>
  );
};
