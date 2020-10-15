import React from 'react';

interface CustomButtonProps {
  text: string;
  onClick: () => void;
  color: string;
  customClassName?: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({ color, text, onClick, customClassName }) => {
  return (
    <button
      className={`text-gray-200 border rounded bg-${color}-600 hover:translate-y-1 
                  hover:bg-${color}-800 transition-all duration-200 p-2 focus:outline-none 
                  focus:shadow-outline focus:border-none active:bg-blue-700 disabled:opacity-75 ${customClassName}`}
      onClick={onClick}
      disabled={true}>
      {text}
    </button>
  );
};
