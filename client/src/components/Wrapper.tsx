import React from 'react';

interface WrapperProps {
  children: React.ReactElement;
}

export const Wrapper: React.FC<WrapperProps> = ({ children }: WrapperProps) => {
  return (
    <div className="max-w-3xl ml-auto mr-auto shadow-lg p-10 ">{children}</div>
  );
};
