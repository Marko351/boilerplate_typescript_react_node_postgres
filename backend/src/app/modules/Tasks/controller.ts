import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'
import moment from 'moment'

import { HTTP_OK } from '../../constants/HTTPStatusCode'
import { ITask, IGetAllTaskOptions } from './Task'
import { TasksRepository } from './repository'
import { returnFormattedValidationError } from '../../helpers/formattedError'
import { ChecklistRepository } from '../Checklists'
import { CommentsRepository } from '../Comments'
import { IChecklist } from '../Checklists/Checklist'
import { IComment } from '../Comments/Comment'

class TaskController {
  public repo: TasksRepository
  public checklistRepo: ChecklistRepository
  public commentRepo: CommentsRepository
  constructor() {
    this.repo = new TasksRepository()
    this.checklistRepo = new ChecklistRepository()
    this.commentRepo = new CommentsRepository()
  }

  async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const parsedId = parseInt(id)
      const response = await this.repo.getTask(parsedId)
      res.status(200).json(response)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  async createTasks(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, dueDate, taskPriority, description, checklists, comments } = req.body
      const data = {
        name,
        dueDate,
        taskPriority,
        description,
        createdBy: req.userData.userId,
      }
      const responseTaskCreated = await this.repo.create<ITask>(data)
      if (checklists && checklists.length) {
        for (let i = 0; i < checklists.length; i++) {
          const checklistData = {
            taskId: responseTaskCreated.id,
            isDone: checklists[i].isDone,
            description: checklists[i].description,
          }
          await this.checklistRepo.create<IChecklist>(checklistData)
        }
      }
      if (comments && comments.length) {
        for (let i = 0; i < comments.length; i++) {
          const commentData = {
            taskId: responseTaskCreated.id,
            comment: comments[i].comment,
            createdBy: req.userData.userId,
          }
          console.log(commentData)
          await this.commentRepo.createComment(commentData)
        }
      }
      const response = await this.repo.getTask(responseTaskCreated.id as number)
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
          checklists: Joi.array(),
          comments: Joi.array(),
        })
      await schema.validateAsync(data)
      next()
    } catch (err) {
      returnFormattedValidationError(err, res)
    }
  }

  async getAllTasks(req: Request, res: Response, next: NextFunction) {
    try {
      const { limit, skip } = req.query
      const options: IGetAllTaskOptions = {
        limit: Number(limit) || 0,
        skip: Number(skip) || 0,
      }
      const response = await this.repo.getAllTasks(options, req.userData.userId!)
      // console.log(response)
      res.status(HTTP_OK).json(response)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  async completeTask(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const data = {
        isCompleted: true,
        completionDate: moment().format('YYYY-MM-DD hh:mm A'),
      }
      const response = await this.repo.updateOne(data, +id)
      res.status(HTTP_OK).json(response)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }
}

export { TaskController }
