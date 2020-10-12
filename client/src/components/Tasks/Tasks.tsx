import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../redux/reducers';
import { ITask } from './ts/interfaces';
import { TaskItem } from './TaskItem';
import { addNewTask, toggleComplete } from './redux/taskActions';
import { Wrapper } from '../../common/Wrapper';

const mapStateToProps = (state: RootState) => ({
  tasksReducer: state.tasksReducer,
});

const connector = connect(mapStateToProps, { addNewTask, toggleComplete });

type PropsFromRedux = ConnectedProps<typeof connector>;

type TasksProps = PropsFromRedux;

const TasksComponentDefault: React.FC<TasksProps> = ({ tasksReducer, addNewTask, toggleComplete }: TasksProps) => {
  const [task] = useState({
    id: Math.floor(Math.random() * 100),
    text: '',
    isCompleted: false,
  });

  const onToggleComplete = (id: number) => {
    toggleComplete(id);
  };

  const onAddNewTask = () => {
    addNewTask(task);
  };

  return (
    <Wrapper>
      <div>
        {tasksReducer.tasks.map((task: ITask) => {
          return (
            <TaskItem
              key={task.id}
              text={task.text}
              isCompleted={task.isCompleted}
              id={task.id}
              onToggleComplete={onToggleComplete}
            />
          );
        })}
      </div>
      {/* <button onClick={onAddNewTask}>Add new task</button> */}
    </Wrapper>
  );
};

export const TaskComponent = connector(TasksComponentDefault);
