import React, { ChangeEvent, useState, useEffect } from 'react'
import { useDispatch, useSelector, ConnectedProps } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { RouteComponentProps } from 'react-router-dom'
import moment from 'moment'

import { CustomButton } from '../../common/CustomButton/CustomButton'
import { CustomInput } from '../../common/CustomInput/CustomInput'
import { CustomSelect } from '../../common/CustomSelect/CustomSelect'
import { CustomTextarea } from '../../common/CustomTextarea/CustomTextarea'
import { ChecklistItem } from './ChecklistItem'
import { ProgressBar } from './ProgressBar'
import { Comment } from '../Comments/Comment'

import { TASK_PRIORITIES } from '../../constants/taskConstants'
import { RootState } from '../../redux/reducers'
import { addNewTask, getTask, clearAllTaskData } from './redux/taskActions'
import { IChecklist, ITask } from '../../types/Task'
import { CustomCard } from '../../common/CustomCard/CustomCard'
import { TStateTasks } from './redux/tasksReducer'
import { clearComments, getComments } from '../Comments/redux/commentActions'

interface MatchParams {
  id: string
}

type ITaskProps = RouteComponentProps<MatchParams>

type Checklists = IChecklist[]

export const TaskComponent: React.FC<ITaskProps> = ({ match, history }) => {
  const dispatch = useDispatch()
  const TaskReducer = useSelector<RootState, TStateTasks>((state) => state.tasksReducer)
  const [task, setTask] = useState<ITask>({
    id: null,
    name: '',
    description: '',
    dueDate: '',
    taskPriority: 1,
    isCompleted: false,
  })
  const [checklists, setChecklist] = useState<Checklists>([])
  const [progressValue, setProgressValue] = useState(0)

  useEffect(() => {
    if (match.params.id) {
      dispatch(getTask(+match.params.id))
      dispatch(getComments(+match.params.id, 'task'))
    }
    return () => {
      dispatch(clearAllTaskData())
      dispatch(clearComments())
    }
  }, [])

  useEffect(() => {
    if (Object.keys(TaskReducer.task).length) {
      const { checklist, ...rest } = TaskReducer.task
      const newTaskData = {
        ...rest,
        dueDate: moment(rest.dueDate).utc().local().format('YYYY-MM-DD'),
      }
      setTask(newTaskData)
      setChecklist(checklist)
    }
  }, [TaskReducer.task])

  useEffect(() => {
    getProgressValue()
  }, [checklists])

  const getProgressValue = () => {
    let count = 0
    checklists.forEach((checklist) => {
      if (checklist.isDone) count++
    })
    setProgressValue(+((100 / checklists.length) * count).toFixed(2) || 0)
  }

  const handleTaskChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { value, name } = e.target
    setTask({ ...task, [name]: value })
  }

  const onAddCheckList = () => {
    const newItem = {
      isDone: false,
      description: '',
      uuid: uuidv4(),
    }
    setChecklist([...checklists, newItem])
  }

  const onChangeChecklistDesc = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { name, value, checked } = e.target
    const newChecklist = [...checklists]
    if (name === 'description') newChecklist[index][name] = value
    if (name === 'isDone') newChecklist[index][name] = checked
    setChecklist(newChecklist)
  }

  const onDeleteChecklistItem = (id: string | number) => {
    let newChecklist = [...checklists]
    if (typeof id === 'string') {
      newChecklist = checklists.filter((checklist) => checklist.uuid !== id)
    } else if (typeof id === 'number') {
      newChecklist = checklists.filter((checklist) => checklist.id !== id)
    }
    setChecklist(newChecklist)
  }

  const onSaveClick = async () => {
    const taskData = {
      name: task.name,
      description: task.description,
      dueDate: task.dueDate,
      taskPriority: task.taskPriority,
    }
    await dispatch(addNewTask(taskData, checklists, history))
  }

  return (
    <div className='wrapper'>
      <CustomCard headerText={match.params.id ? 'Edit Task' : 'Create Task'} isButtonShowed={false}>
        <div className='task'>
          <div className='task__left'>
            <CustomInput
              customClass={'mb-tiny'}
              value={task.name}
              placeholder='Task Name'
              onChange={handleTaskChange}
              name='name'
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
              value={task.taskPriority}
              options={TASK_PRIORITIES}
              onChange={handleTaskChange}
              name='taskPriority'
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
              <ProgressBar value={progressValue} />
              {checklists.map((checklistItem, index) => {
                const id = checklistItem.id! || checklistItem.uuid!
                return (
                  <ChecklistItem
                    key={id}
                    id={id}
                    isDone={checklistItem.isDone}
                    description={checklistItem.description}
                    onChangeChecklistDesc={onChangeChecklistDesc}
                    index={index}
                    onDeleteChecklistItem={onDeleteChecklistItem}
                  />
                )
              })}
              <CustomButton
                customClassName={`${checklists.length ? 'mt-tiny' : ''} d-block`}
                text='Add Checklist Item'
                onClick={onAddCheckList}
                color='primary'
              />
            </div>
          </div>
          <div className='task__right'>
            <Comment taskId={task.id} />
          </div>
        </div>
        <div className='separate-line'></div>
        <div className='footer-buttons'>
          {match.params.id ? (
            <>
              <CustomButton text='Update' onClick={onSaveClick} color='primary mr-tiny' />
              <CustomButton text='Complete' onClick={onSaveClick} color='success mr-tiny' />
              <CustomButton text='Delete' onClick={onSaveClick} color='danger' />
            </>
          ) : (
            <CustomButton text='Save' onClick={onSaveClick} color='primary' />
          )}
        </div>
      </CustomCard>
    </div>
  )
}
