import React, { ChangeEvent } from 'react';

interface CheckboxProps {
  value: boolean;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  customClass?: string;
}

export const CalendarCheckbox: React.FC<CheckboxProps> = ({ customClass, label, value, name, onChange }) => {
  return (
    <label className={`check ${customClass}`}>
      {label}
      <input type='checkbox' checked={value} name={name} onChange={onChange} />
      <span className={`checkmark ${name}`} />
    </label>
  );
};
