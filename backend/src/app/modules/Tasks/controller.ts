import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'

import { HTTP_OK } from '../../constants/HTTPStatusCode'
import { ITask } from './Task'
import { TasksRepository } from './repository'
import { returnFormattedValidationError } from '../../helpers/formattedError'

class TaskController {
  public repo: TasksRepository
  constructor() {
    this.repo = new TasksRepository()
  }

  async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const parsedId = parseInt(id)
      const response = await this.repo.getOne<ITask>(parsedId)
      res.status(200).json(response)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  async createTasks(req: Request, res: Response, next: NextFunction) {
    try {
      const data = {
        ...req.body,
        createdBy: req.userData.userId,
      }
      const response = await this.repo.create<ITask>(data)
      res.status(HTTP_OK).json(response)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  async updateTask(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body
      const { id } = req.params
      const parsedId = parseInt(id)
      const response = await this.repo.updateOne(data, parsedId)
      res.status(HTTP_OK).json(response)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  async deleteTask(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const parsedId = parseInt(id)
      const response = await this.repo.deleteOne(parsedId)
      res.status(HTTP_OK).json(response)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  async ValidateTaskData(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body
      const schema = Joi.object()
        .options({ abortEarly: false })
        .keys({
          name: Joi.string().required().messages({
            'string.empty': 'Task Name is required',
          }),
          dueDate: Joi.date().required().messages({
            'string.empty': 'Due Date is required',
          }),
          taskPriority: Joi.number().allow('').allow(null),
          description: Joi.string().allow(''),
        })
      await schema.validateAsync(data)
      next()
    } catch (err) {
      returnFormattedValidationError(err, res)
    }
  }
}

export { TaskController }
