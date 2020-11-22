import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import { ReactComponent as DeleteIcon } from '../../assets/icons/wrong.svg'
import { ReactComponent as PencilIcon } from '../../assets/icons/pencil.svg'
import { CustomInput } from '../../common/CustomInput/CustomInput'

interface IChecklist {
  isCompleted: boolean
  description: string
  onChangeChecklistDesc: (e: ChangeEvent<HTMLInputElement>, index: number) => void
  index: number
  onDeleteChecklistItem: (id: string | number) => void
  id: string | number
}

export const ChecklistItem: React.FC<IChecklist> = ({
  isCompleted,
  description,
  onChangeChecklistDesc,
  index,
  onDeleteChecklistItem,
  id,
}) => {
  const [isUpdateClicked, setIsUpdateClicked] = useState(false)

  const onUpdateClick = () => {
    setIsUpdateClicked(!isUpdateClicked)
  }

  const onPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsUpdateClicked(!isUpdateClicked)
    }
  }

  return (
    <div className='checklist'>
      <div className='checklist__ingredients'>
        <input
          type='checkbox'
          checked={isCompleted}
          name='isCompleted'
          onChange={(e) => onChangeChecklistDesc(e, index)}
        />
        {!isUpdateClicked ? (
          <span className={`checklist__description ${isCompleted && 'line-through'}`}>{description}</span>
        ) : (
          <CustomInput
            customClass='ml-tiny'
            value={description}
            placeholder='Description'
            onChange={(e) => onChangeChecklistDesc(e, index)}
            name='description'
            onKeyDown={onPressEnter}
          />
        )}
      </div>
      <div className='checklist__icons'>
        <div className='checklist__icon-box'>
          <button onClick={onUpdateClick} className='checklist__button'>
            <PencilIcon />
          </button>
        </div>
        <div className='checklist__icon-box'>
          <button onClick={() => onDeleteChecklistItem(id)} className='checklist__button'>
            <DeleteIcon />
          </button>
        </div>
      </div>
    </div>
  )
}
