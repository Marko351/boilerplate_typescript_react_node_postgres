import React from 'react';

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <div className="bg-gray-800 h-16 w-screen flex justify-between items-center p-8">
      <div>
        <h1 className="font-bold text-2xl cursor-pointer bg-gray-100 p-1">
          Todo Typescript App
        </h1>
      </div>
      <div className="text-gray-200 cursor-pointer">
        <span className="mr-3">Second</span>
        <span>Third</span>
      </div>
    </div>
  );
};
