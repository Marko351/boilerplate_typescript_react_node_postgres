import { number } from 'joi'

export interface IChecklist {
  taskId: number
  isDone: boolean
  description: string
}

export interface IChecklistTask {
  isDone: boolean
  description: string
}
