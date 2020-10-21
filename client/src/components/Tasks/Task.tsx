import React, { ChangeEvent, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { CustomButton } from '../../common/CustomButton/CustomButton';
import { CustomInput } from '../../common/CustomInput/CustomInput';
import { CustomSelect } from '../../common/CustomSelect/CustomSelect';
import { CustomTextarea } from '../../common/CustomTextarea/CustomTextarea';
import { ChecklistItem } from './ChecklistItem';
import { TASK_PRIORITIES } from '../../constants/constants';

import { RootState } from '../../redux/reducers';
import { addNewTask, toggleComplete } from './redux/taskActions';
import { IChecklist } from './ts/interfaces';

const mapStateToProps = (state: RootState) => ({
  tasksReducer: state.tasksReducer,
});

const connector = connect(mapStateToProps, { addNewTask, toggleComplete });

type PropsFromRedux = ConnectedProps<typeof connector>;

type TasksProps = PropsFromRedux;

type Checklists = IChecklist[];

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
  const [checklists, setChecklist] = useState<Checklists>([]);

  const handleTaskChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { value, name } = e.target;
    setTask({ ...task, [name]: value });
  };

  const onAddCheckList = () => {
    const newItem = {
      isCompleted: false,
      description: '',
      uuid: uuidv4(),
    };
    setChecklist([...checklists, newItem]);
  };

  const onChangeChecklistDesc = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { name, value, checked } = e.target;
    const newChecklist = [...checklists];
    if (name === 'description') newChecklist[index][name] = value;
    if (name === 'isCompleted') newChecklist[index][name] = checked;
    setChecklist(newChecklist);
  };

  const onDeleteChecklistItem = (id: string | number) => {
    let newChecklist = [...checklists];
    if (typeof id === 'string') {
      newChecklist = checklists.filter((checklist) => checklist.uuid !== id);
    } else if (typeof id === 'number') {
      newChecklist = checklists.filter((checklist) => checklist.id !== id);
    }
    setChecklist(newChecklist);
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
            {checklists.map((checklistItem, index) => {
              const id = checklistItem.id! || checklistItem.uuid!;
              return (
                <ChecklistItem
                  key={id}
                  id={id}
                  isCompleted={checklistItem.isCompleted}
                  description={checklistItem.description}
                  onChangeChecklistDesc={onChangeChecklistDesc}
                  index={index}
                  onDeleteChecklistItem={onDeleteChecklistItem}
                />
              );
            })}
            <CustomButton
              customClassName={`${task.checklist.length ? 'mt-tiny' : ''} d-block`}
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
