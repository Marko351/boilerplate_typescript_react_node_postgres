import React from 'react';
import CustomCard from '../../common/CustomCard/CustomCard';

interface TaskItemProps {
  text: string;
  isCompleted: boolean;
  id: number;
  onToggleComplete: (id: number) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ text, isCompleted, id, onToggleComplete }: TaskItemProps) => {
  return (
    <CustomCard headerText='task'>
      <div className='flex min-w-full items-center'>
        <div className='p-5 border-r'>
          <input type='checkbox' checked={!!isCompleted} onChange={() => onToggleComplete(id)} />
        </div>
        <div className='p-5'>{text}</div>
      </div>
    </CustomCard>
  );
};
