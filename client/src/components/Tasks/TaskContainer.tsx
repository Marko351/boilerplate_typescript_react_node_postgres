import React from 'react';
import { CustomCard } from '../../common/CustomCard/CustomCard';
import { TaskComponent } from './Task';

export const TaskContainer: React.FC = () => {
  return (
    <div className='wrapper'>
      <CustomCard headerText='Create Task'>
        <TaskComponent />
      </CustomCard>
    </div>
  );
};
