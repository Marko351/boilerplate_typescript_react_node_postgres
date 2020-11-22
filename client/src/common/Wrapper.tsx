import React from 'react'

interface WrapperProps {
  children: React.ReactElement | React.ReactElement[]
}

export const Wrapper: React.FC<WrapperProps> = ({ children }: WrapperProps) => {
  return <div className='max-w-6xl ml-auto mr-auto'>{children}</div>
}
