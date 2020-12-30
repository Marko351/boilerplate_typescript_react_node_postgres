import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { ReactComponent as DeleteIcon } from '../../assets/icons/wrong.svg'
import { ReactComponent as PencilIcon } from '../../assets/icons/pencil.svg'
import { CustomInput } from '../../common/CustomInput/CustomInput'
import { changeChecklistData, onDeleteChecklist } from './redux/checklistActions'

interface IChecklist {
  isDone: boolean
  description: string
  id: string | number
}

export const Checklist: React.FC<IChecklist> = ({ isDone, description, id }) => {
  const dispatch = useDispatch()
  const [isUpdateClicked, setIsUpdateClicked] = useState(false)

  const onUpdateClick = () => {
    setIsUpdateClicked(!isUpdateClicked)
  }

  const onPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsUpdateClicked(!isUpdateClicked)
    }
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target
    if (name === 'description') {
      dispatch(changeChecklistData(name, value, id))
    } else if (name === 'isDone') {
      dispatch(changeChecklistData(name, checked, id))
    }
  }

  const onDeleteChecklistItem = () => {
    dispatch(onDeleteChecklist(id))
  }

  return (
    <div className='checklist'>
      <div className='checklist__ingredients'>
        <input type='checkbox' checked={isDone} name='isDone' onChange={onChange} />
        {!isUpdateClicked ? (
          <span className={`checklist__description ${isDone && 'line-through'}`}>{description}</span>
        ) : (
          <CustomInput
            customClass='ml-tiny'
            value={description}
            placeholder='Description'
            onChange={onChange}
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
          <button onClick={onDeleteChecklistItem} className='checklist__button'>
            <DeleteIcon />
          </button>
        </div>
      </div>
    </div>
  )
}
