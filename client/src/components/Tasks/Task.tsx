import React, { ChangeEvent, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { CustomButton } from '../../common/CustomButton/CustomButton';
import { CustomInput } from '../../common/CustomInput/CustomInput';
import { CustomSelect } from '../../common/CustomSelect/CustomSelect';
import { CustomTextarea } from '../../common/CustomTextarea/CustomTextarea';
import { ChecklistItem } from './ChecklistItem';
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
    checklist: [{ isCompleted: false, description: 'test' }],
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
    <>
      <div className='task'>
        <div className='task__left'>
          <CustomInput
            customClass={'mb-tiny'}
            value={task.taskName}
            placeholder='Task Name'
            onChange={handleTaskChange}
            name='taskName'
            label='Task Name'
          />
          <CustomInput
            customClass={'mb-tiny'}
            type='date'
            placeholder='Due Date'
            value={task.dueDate}
            onChange={handleTaskChange}
            name='dueDate'
            label='Due Date'
          />
          <CustomSelect
            customClass={'mb-tiny'}
            value={task.priority}
            options={TASK_PRIORITIES}
            onChange={handleTaskChange}
            name='priority'
            label='Task Priority'
          />
          <CustomTextarea
            customClass={'mb-tiny'}
            value={task.description}
            onChange={handleTaskChange}
            placeholder='Description'
            name='description'
            label='Description'
          />
          <div className='task__checklists'>
            <span className='task__checklists--label'>Checklist</span>
            <ChecklistItem isCompleted={task.checklist[0].isCompleted} description={task.checklist[0].description} />
            <CustomButton
              customClassName={task.checklist.length ? 'mt-tiny' : ''}
              text='Add Checklist Item'
              onClick={onAddCheckList}
              color='primary'
            />
          </div>
        </div>
        <div className='task__right'>
          Right Sideasdad Right Sideasdad Right Sideasdad Right Sideasdad Right Sideasdad Right Sideasdad Right
          Sideasdad
        </div>
      </div>
      <div className='separate-line'></div>
      <div></div>
    </>
  );
};

export const TaskComponent = connector(TasksComponentDefault);
