import React from 'react'
import { CustomButton } from '../CustomButton/CustomButton'

interface CustomCardProps {
  children: React.ReactElement[] | React.ReactElement
  headerText: string
  isButtonShowed: boolean
  buttonText?: string
  onButtonClick?: () => void
}

export const CustomCard: React.FC<CustomCardProps> = ({
  children,
  headerText,
  isButtonShowed,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className='card'>
      <div className='card__header'>
        <span className='card__header--text'>{headerText}</span>
        {isButtonShowed && <CustomButton text={buttonText || ''} color='main' onClick={onButtonClick} />}
      </div>
      <div className='card__body'>{children}</div>
    </div>
  )
}
