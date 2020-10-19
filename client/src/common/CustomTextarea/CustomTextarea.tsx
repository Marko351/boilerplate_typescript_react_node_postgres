import React, { ChangeEvent } from 'react';

interface CustomTextareaProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
  label: string;
  placeholder: string;
  error?: boolean;
  disabled?: boolean;
}

export const CustomTextarea: React.FC<CustomTextareaProps> = ({ placeholder, value, onChange, name, label, error }) => {
  return (
    <div className='c-input'>
      <label htmlFor={name} className='c-input__label'>
        {label}
      </label>
      <textarea
        className='c-input__input'
        placeholder={placeholder}
        rows={3}
        value={value}
        onChange={onChange}
        name={name}
      />
      {error && <small>{`${label} is required`}</small>}
    </div>
  );
};
