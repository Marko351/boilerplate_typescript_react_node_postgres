import React from 'react';

interface CustomCardProps {
  children: React.ReactElement[] | React.ReactElement;
  headerText: string;
}

export const CustomCard: React.FC<CustomCardProps> = ({ children, headerText }) => {
  return (
    <div className='flex flex-col min-w-full min-h-full m-5'>
      <div className={`min-w-full bg-mainColor text-gray-800 rounded-t p-3`}>{headerText.toUpperCase()}</div>
      <div className='min-w-full border-r border-b border-l rounded-b p-3'>{children}</div>
    </div>
  );
};
