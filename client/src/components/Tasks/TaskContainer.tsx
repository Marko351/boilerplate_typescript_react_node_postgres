import React from 'react';
import { CustomCard } from '../../common/CustomCard/CustomCard';
import { Wrapper } from '../../common/Wrapper';
import { TaskComponent } from './Task';

export const TaskContainer: React.FC = () => {
  return (
    <Wrapper>
      <CustomCard headerText='Create Task'>
        <TaskComponent />
      </CustomCard>
    </Wrapper>
  );
};
