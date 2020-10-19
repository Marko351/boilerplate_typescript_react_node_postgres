import React, { ChangeEvent, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { CustomButton } from '../../common/CustomButton';
import { CustomInput } from '../../common/CustomInput/CustomInput';
import { CustomSelect } from '../../common/CustomSelect';
import { CustomTextarea } from '../../common/CustomTextarea/CustomTextarea';
import { TASK_PRIORITIES } from '../../constants/constants';

import { RootState } from '../../redux/reducers';
import { addNewTask, toggleComplete } from './redux/taskActions';

const mapStateToProps = (state: RootState) => ({
  tasksReducer: state.tasksReducer,
});

const connector = connect(mapStateToProps, { addNewTask, toggleComplete });

type PropsFromRedux = ConnectedProps<typeof connector>;

type TasksProps = PropsFromRedux;

const TasksComponentDefault: React.FC<TasksProps> = ({ tasksReducer, addNewTask, toggleComplete }) => {
  const [task, setTask] = useState({
    id: null,
    taskName: '',
    description: '',
    dueDate: '',
    priority: 1,
    checklist: [],
    isCompleted: false,
  });

  const handleTaskChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { value, name } = e.target;
    setTask({ ...task, [name]: value });
  };

  const onAddCheckList = () => {
    console.log('test');
  };

  return (
    <div className='flex px-5'>
      <div className='lg:w-1/2 px-5'>
        <div className='flex flex-col'>
          <div className='w-full mb-3'>
            <CustomInput
              value={task.taskName}
              placeholder='Task Name'
              onChange={handleTaskChange}
              name='taskName'
              label='Task Name'
            />
          </div>
          <div className='w-full mb-3'>
            <CustomInput
              type='date'
              placeholder='Due Date'
              value={task.dueDate}
              onChange={handleTaskChange}
              name='dueDate'
              label='Due Date'
            />
          </div>
          <div className='w-full mb-3'>
            <CustomSelect
              value={task.priority}
              options={TASK_PRIORITIES}
              onChange={handleTaskChange}
              name='priority'
              label='Task Priority'
            />
          </div>
          <div className='w-full mb-3'>
            <CustomTextarea
              value={task.description}
              onChange={handleTaskChange}
              placeholder='Description'
              name='description'
              label='Description'
            />
          </div>
          <div className='w-full'>
            <CustomButton text='Add Checklist' onClick={onAddCheckList} color='green' />
          </div>
        </div>
      </div>
      <div className='lg:w-2/5'></div>
    </div>
  );
};

export const TaskComponent = connector(TasksComponentDefault);
