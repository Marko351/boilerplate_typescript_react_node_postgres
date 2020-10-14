import React, { ChangeEvent } from 'react';

type optionType = { value: number; label: string };

interface CustomSelectProps {
  options: Array<optionType>;
  name: string;
  label: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  value: number;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({ value, options, name, label, onChange }) => {
  return (
    <div>
      <label htmlFor={name} className='mb-1 text-gray-800'>
        {label}
      </label>
      <select
        className='flex w-full bg-white border rounded p-2 focus:outline-none text-gray-700 text-base'
        name={name}
        onChange={onChange}
        value={value}>
        {options.map((option: optionType, index: number) => (
          <option key={index} value={option.value} className='appearance-none p-2'>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
