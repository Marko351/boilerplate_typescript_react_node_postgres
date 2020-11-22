import React from 'react'

interface ProgressBarProps {
  value: number
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
  return (
    <div className='progress-bar'>
      <span className='progress-bar__value'>{value}%</span>
      <div className='progress-bar__progress' style={{ width: `${value}%` }}></div>
    </div>
  )
}
