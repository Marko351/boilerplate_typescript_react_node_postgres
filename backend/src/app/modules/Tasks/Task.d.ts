import { HIGH, LOW, MIDDLE } from '../../constants/TaskPriorities'

export interface ITask {
  creationDate: string
  createdBy?: number
  name: string
  dueDate: string
  taskPriority?: TTaskPriorities
  description?: string
}

type TTaskPriorities = typeof LOW | typeof HIGH | typeof MIDDLE
