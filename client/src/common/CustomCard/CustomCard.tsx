import React from 'react';

interface CustomCardProps {
  children: React.ReactElement[] | React.ReactElement;
  headerText: string;
}

export const CustomCard: React.FC<CustomCardProps> = ({ children, headerText }) => {
  return (
    <div className='card'>
      <div className='card__header'>{headerText.toUpperCase()}</div>
      <div className='card__body'>{children}</div>
    </div>
  );
};
