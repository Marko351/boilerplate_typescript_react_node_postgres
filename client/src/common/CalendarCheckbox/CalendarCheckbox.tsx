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
    <>
      <input
        type='checkbox'
        id={name}
        className='calendar-checkbox__checkbox'
        name={name}
        checked={value}
        onChange={onChange}
      />
      <label htmlFor={name}>Check and uncheck this</label>
    </>
    // <label className='calendar-checkbox'>
    //   {label}
    //   <input type='checkbox' className='calendar-checkbox__checkbox' name={name} checked={value} onChange={onChange} />
    //   <div className='calendar-checkbox__indicator'></div>
    // </label>
  );
};
