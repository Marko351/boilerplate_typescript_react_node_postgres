import React from 'react';

interface CustomCardProps {
  children: React.ReactElement;
  headerText: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ children, headerText }) => {
  return (
    <div className='flex flex-col min-w-full min-h-full'>
      <div className={`h-10 min-w-full bg-colorTertiary text-gray-200 rounded-t p-2`}>{headerText}</div>
      <div className='min-w-full border-r border-b border-l rounded-b p-2'>{children}</div>
    </div>
  );
};

export default CustomCard;
