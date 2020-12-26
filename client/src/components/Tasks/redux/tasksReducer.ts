import { ITableOptions } from '../../../types/Table'
import { ITask, TAllReduxTypes } from '../../../types/Task'
import { ADD_NEW_TASK, COMPLETE_TASK, GET_ALL_TASKS, GET_TASK, CLEAR_ALL_DATA } from './reduxTypes'

export type TStateTasks = {
  task: ITask
  tasks: Array<ITask>
  isLoading: boolean
  options: ITableOptions
}

const initialState: TStateTasks = {
  task: {
    name: '',
    description: '',
    dueDate: '',
    taskPriority: 0,
  },
  tasks: [],
  isLoading: false,
  options: {
    totalRecords: 0,
    limit: 0,
    skip: 0,
  },
}

export const tasksReducer = (state = initialState, action: TAllReduxTypes): TStateTasks => {
  switch (action.type) {
    case CLEAR_ALL_DATA:
      return {
        ...state,
        task: {
          name: '',
          description: '',
          dueDate: '',
          taskPriority: 0,
        },
      }
    case GET_TASK:
      return {
        ...state,
        task: action.payload,
      }
    case ADD_NEW_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      }
    case GET_ALL_TASKS:
      return {
        ...state,
        tasks: action.payload.data,
        options: action.payload.options,
      }
    case COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task: ITask) => {
          if (task.id === action.payload) task.isCompleted = !task.isCompleted
          return task
        }),
      }
    default:
      return state
  }
}
