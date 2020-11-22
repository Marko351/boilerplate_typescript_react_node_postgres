import { ITask, TAllReduxTypes } from '../../../types/Task'
import { ADD_NEW_TASK, COMPLETE_TASK } from './reduxTypes'

export type TStateTasks = {
  tasks: Array<ITask>
  isLoading: boolean
}

const initialState: TStateTasks = {
  tasks: [],
  isLoading: false,
}

export const tasksReducer = (state = initialState, action: TAllReduxTypes): TStateTasks => {
  switch (action.type) {
    case ADD_NEW_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
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
