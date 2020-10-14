import React, { ChangeEvent } from 'react';

interface CustomTextareaProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
  label: string;
  error?: boolean;
  disabled?: boolean;
}

export const CustomTextarea: React.FC<CustomTextareaProps> = ({ value, onChange, name, label, error }) => {
  return (
    <div className='flex flex-col w-full'>
      <label htmlFor={name} className='mb-1 text-gray-800'>
        {label}
      </label>
      <textarea
        className='w-full border rounded px-2 py-1 focus:outline-none text-gray-700'
        rows={3}
        value={value}
        onChange={onChange}
        name={name}
      />
      {error && <small>{`${label} is required`}</small>}
    </div>
  );
};
