import { HIGH, LOW, MIDDLE } from '../../constants/TaskPriorities'
import { IChecklistTask } from '../Checklists/Checklist'

export interface ITask {
  id?: number
  creationDate: string
  createdBy?: number
  name: string
  dueDate: string
  taskPriority?: TTaskPriorities
  description?: string
  checklist?: IChecklistTask[]
}

type TTaskPriorities = typeof LOW | typeof HIGH | typeof MIDDLE

export interface IGetAllTaskOptions {
  limit: number
  skip: number
}
