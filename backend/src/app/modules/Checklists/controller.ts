import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'

import { HTTP_OK } from '../../constants/HTTPStatusCode'
import { IChecklist } from './Checklist'
import { ChecklistRepository } from './repository'
import { returnFormattedValidationError } from '../../helpers/formattedError'

class ChecklistController {
  public repo: ChecklistRepository
  constructor() {
    this.repo = new ChecklistRepository()
  }

  async createChecklists(req: Request, res: Response, next: NextFunction) {
    try {
      const data = {
        ...req.body,
      }
      await this.repo.create<IChecklist>(data)
      res.status(HTTP_OK)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  async updateChecklist(req: Request, res: Response, next: NextFunction) {
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

  async deleteChecklist(req: Request, res: Response, next: NextFunction) {
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

  async ValidateChecklistData(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body
      const schema = Joi.object()
        .options({ abortEarly: false })
        .keys({
          description: Joi.string().allow(''),
          isDone: Joi.boolean().allow(null),
          taskId: Joi.number().allow(null).allow(''),
        })
      await schema.validateAsync(data)
      next()
    } catch (err) {
      returnFormattedValidationError(err, res)
    }
  }
}

export { ChecklistController }
