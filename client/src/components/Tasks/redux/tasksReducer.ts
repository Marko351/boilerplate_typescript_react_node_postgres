import { ITask, TAllReduxTypes } from '../../../types/Task'
import { ADD_NEW_TASK, COMPLETE_TASK, GET_ALL_TASKS, GET_TASK } from './reduxTypes'

export type TStateTasks = {
  task: ITask
  tasks: Array<ITask>
  isLoading: boolean
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
}

export const tasksReducer = (state = initialState, action: TAllReduxTypes): TStateTasks => {
  switch (action.type) {
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
        tasks: action.payload,
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
