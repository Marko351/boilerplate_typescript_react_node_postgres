import { ADD_NEW_TASK, COMPLETE_TASK } from '../components/Tasks/redux/reduxTypes'

export interface TAddNewTask {
  type: typeof ADD_NEW_TASK
  payload: ITask
}

export interface TCompleteTask {
  type: typeof COMPLETE_TASK
  payload: number
}

export type TAllReduxTypes = TAddNewTask | TCompleteTask

export interface ITask {
  id?: number | null
  name: string
  description: string
  dueDate: string
  creationDate?: string
  taskPriority: number
  isCompleted?: boolean
}

export interface ITasks {
  tasks: ITask[]
}

export interface IChecklist {
  description: string
  isCompleted: boolean
  uuid?: string
  id?: number
}
