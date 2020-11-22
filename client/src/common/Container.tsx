import React from 'react'

interface ContainerProps {
  children: React.ReactElement | any
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className='max-w-screen bg-gray-200'>{children}</div>
}
