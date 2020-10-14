import React, { ChangeEvent } from 'react';

interface CheckboxProps {
  value: boolean;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  color: string;
  customClass?: string;
}

export const CalendarCheckbox: React.FC<CheckboxProps> = ({ color, customClass, label, value, name, onChange }) => {
  return (
    <label className={`inline-flex items-center cursor-pointer ${customClass}`}>
      <input
        className={`form-checkbox h-6 w-6 cursor-pointer text-${color}-500`}
        type='checkbox'
        checked={value}
        name={name}
        onChange={onChange}
      />
      <span className={`ml-2 font-normal text-lg text-${color}-700`}>{label}</span>
    </label>
  );
};
