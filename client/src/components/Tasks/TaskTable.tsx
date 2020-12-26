import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import { NavLink, RouteComponentProps } from 'react-router-dom'

import { getAllTasks } from './redux/taskActions'
import { RootState } from '../../redux/reducers'
import { TStateTasks } from './redux/tasksReducer'
import { ITask } from '../../types/Task'

import { CustomCard } from '../../common/CustomCard/CustomCard'
import { CustomTable, DEFAULT_LIMIT, DEFAULT_SKIP } from '../../common/CustomTable/CustomTable'
import { getTaskPriority } from '../../constants/taskConstants'

type ITaskTable = RouteComponentProps

export const TaskTable: React.FC<ITaskTable> = ({ history }) => {
  const dispatch = useDispatch()
  const TaskReducer = useSelector<RootState, TStateTasks>((state) => state.tasksReducer)
  const [data, setData] = useState<ITask[]>([])
  const [options, setOptions] = useState({
    limit: DEFAULT_LIMIT,
    skip: DEFAULT_SKIP,
  })
  useEffect(() => {
    setData(TaskReducer.tasks)
  }, [TaskReducer.tasks])

  useEffect(() => {
    getTasks()
  }, [options])

  const getTasks = async () => {
    await dispatch(getAllTasks(options))
  }

  const onSkipAndLimitChange = (name: string, value: number) => {
    setOptions({
      ...options,
      [name]: value,
    })
  }

  const isCompletedBody = (rowData: any) => {
    return !rowData.data.isCompleted ? 'No' : 'Yes'
  }

  const dateBody = (rowData: any, name: string) => {
    return moment(rowData.data[name]).utc().local().format('MM-DD-YYYY')
  }

  const priorityBody = (rowData: any) => {
    return getTaskPriority(rowData.data.taskPriority)
  }

  const createdByBody = (rowData: any) => {
    return rowData.data.createdByObj.username
  }

  const nameBody = (rowData: any) => {
    return (
      <NavLink to={`/tasks/${rowData.data.id}`} className='color-link'>
        {rowData.data.name}
      </NavLink>
    )
  }

  const onCreateNewTaskClick = () => {
    history.push('/tasks/new')
  }

  const columns = [
    { name: 'name', header: 'Name', minWidth: 100, defaultFlex: 1, render: nameBody },
    {
      name: 'creationDate',
      header: 'Creation Date',
      minWidth: 100,
      defaultFlex: 1,
      render: (rowData: any) => dateBody(rowData, 'creationDate'),
    },
    {
      name: 'dueDate',
      header: 'Due Date',
      minWidth: 100,
      defaultFlex: 1,
      render: (rowData: any) => dateBody(rowData, 'dueDate'),
    },
    { name: 'taskPriority', header: 'Priority', minWidth: 100, defaultFlex: 1, render: priorityBody },
    { name: 'isCompleted', header: 'Completed', minWidth: 100, defaultFlex: 1, render: isCompletedBody },
    { name: 'createdBy', header: 'Created By', minWidth: 100, defaultFlex: 1, render: createdByBody },
  ]
  return (
    <div className='wrapper'>
      <CustomCard
        headerText='Task Table'
        isButtonShowed={true}
        buttonText={'Create New Task'}
        onButtonClick={onCreateNewTaskClick}>
        <CustomTable
          columns={columns}
          data={data}
          onSkipAndLimitChange={onSkipAndLimitChange}
          totalRecords={TaskReducer.options.totalRecords}
        />
      </CustomCard>
    </div>
  )
}
