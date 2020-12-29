import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'

import { HTTP_OK } from '../../constants/HTTPStatusCode'
import { IComment } from './Comment'
import { CommentsRepository } from './repository'
import { returnFormattedValidationError } from '../../helpers/formattedError'

class CommentsController {
  public repo: CommentsRepository
  constructor() {
    this.repo = new CommentsRepository()
  }

  async getAllComments(req: Request, res: Response, next: NextFunction) {
    try {
      const { id, reference } = req.query
      console.log(req.query)
      const response = await this.repo.getAllComments(+id!, reference as string)
      res.status(HTTP_OK).json(response)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  async createComments(req: Request, res: Response, next: NextFunction) {
    try {
      const data = {
        ...req.body,
        createdBy: req.userData.userId,
      }
      const response = await this.repo.create<IComment>(data)
      res.status(HTTP_OK).json(response)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  async updateComments(req: Request, res: Response, next: NextFunction) {
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

  async deleteComments(req: Request, res: Response, next: NextFunction) {
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

  async ValidateCommentsData(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body
      const schema = Joi.object()
        .options({ abortEarly: false })
        .keys({
          comment: Joi.string().required().messages({
            'string.empty': 'Comment description is required',
          }),
        })
        .unknown(true)
      await schema.validateAsync(data)
      next()
    } catch (err) {
      returnFormattedValidationError(err, res)
    }
  }
}

export { CommentsController }
