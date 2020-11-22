import { number } from 'joi'

export interface IChecklist {
  taskId: number
  isDone: boolean
  description: string
}
