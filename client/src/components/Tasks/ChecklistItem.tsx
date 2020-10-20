import React from 'react';
import { ReactComponent as DeleteIcon } from '../../assets/icons/wrong.svg';
import { ReactComponent as PencilIcon } from '../../assets/icons/pencil.svg';
import { CalendarCheckbox } from '../../common/CalendarCheckbox/CalendarCheckbox';

interface IChecklist {
  isCompleted: boolean;
  description: string;
}

export const ChecklistItem: React.FC<IChecklist> = ({ isCompleted, description }) => {
  return (
    <div className='checklist'>
      <div className='checklist__ingredients'>
        <input type='checkbox' />
        <span className='checklist__description'>{description}</span>
      </div>
      <div className='checklist__icons'>
        <div className='checklist__icon-box'>
          <button className='checklist__button'>
            <PencilIcon />
          </button>
        </div>
        <div className='checklist__icon-box'>
          <button className='checklist__button'>
            <DeleteIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
