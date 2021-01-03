import {
  ADD_NEW_TASK,
  COMPLETE_TASK,
  GET_ALL_TASKS,
  GET_TASK,
  CLEAR_ALL_DATA,
} from '../components/Tasks/redux/reduxTypes'
import { IComment } from './Comment'
import { ITableOptions } from './Table'

export interface TAddNewTask {
  type: typeof ADD_NEW_TASK
  payload: ITask
}

export interface TCompleteTask {
  type: typeof COMPLETE_TASK
  payload: number
}

export interface TGetAllTasks {
  type: typeof GET_ALL_TASKS
  payload: {
    data: ITask[]
    options: ITableOptions
  }
}

export interface TGetTask {
  type: typeof GET_TASK
  payload: ITaskReducer
}

export interface IClearAllTaskData {
  type: typeof CLEAR_ALL_DATA
}

export type TAllReduxTypes = TAddNewTask | TCompleteTask | TGetAllTasks | TGetTask | IClearAllTaskData

export interface ITask {
  id?: number | null
  name: string
  description: string
  dueDate: string
  creationDate?: string
  taskPriority: number
  isCompleted?: boolean
  completionDate?: string | null
}

export interface ITaskReducer extends ITask {
  checklist: IChecklist[]
  comments: IComment[]
}

export interface ITasks {
  tasks: ITask[]
}

export interface IChecklist {
  description: string
  isDone: boolean
  uuid?: string
  id?: number
}
