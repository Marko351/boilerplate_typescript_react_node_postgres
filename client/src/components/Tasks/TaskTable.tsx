import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getAllTasks } from './redux/taskActions'
import { RootState } from '../../redux/reducers'
import { TStateTasks } from './redux/tasksReducer'
import { ITask } from '../../types/Task'

import { CustomCard } from '../../common/CustomCard/CustomCard'
import { CustomTable, DEFAULT_LIMIT, DEFAULT_SKIP } from '../../common/CustomTable/CustomTable'

// const data = [
//   // { id: 1, name: 'John McQueen', age: 35 },
// ]
export const TaskTable: React.FC = () => {
  const dispatch = useDispatch()
  const TaskReducer = useSelector<RootState, TStateTasks>((state) => state.tasksReducer)
  const [data, setData] = useState<ITask[]>([])
  const [options, setOptions] = useState({
    limit: DEFAULT_LIMIT,
    skip: DEFAULT_SKIP,
  })

  useEffect(() => {
    if (TaskReducer.tasks.length) {
      setData(TaskReducer.tasks)
    }
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

  const columns = [
    { name: 'name', header: 'Name', minWidth: 100, defaultFlex: 1 },
    { name: 'description', header: 'Description', minWidth: 100, defaultFlex: 1 },
    { name: 'isCompleted', header: 'Completed', minWidth: 100, defaultFlex: 1 },
  ]
  return (
    <CustomCard headerText='Task Table'>
      <CustomTable columns={columns} data={data} onSkipAndLimitChange={onSkipAndLimitChange} />
    </CustomCard>
  )
}
