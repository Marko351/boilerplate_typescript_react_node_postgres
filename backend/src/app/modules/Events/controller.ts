import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'

import { HTTP_OK } from '../../constants/HTTPStatusCode'
import { IEvent } from './Event'
import { EventsRepository } from './repository'
import { returnFormattedValidationError } from '../../helpers/formattedError'
import { CommentsRepository } from '../Comments'
import { IComment } from '../Comments/Comment'

class EventController {
  public repo: EventsRepository
  public commentRepo: CommentsRepository
  constructor() {
    this.repo = new EventsRepository()
    this.commentRepo = new CommentsRepository()
  }

  async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const parsedId = parseInt(id)
      const response = await this.repo.getOne<IEvent>(parsedId)
      res.status(200).json(response)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  async createEvents(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, startDate, endDate, description, location, comments } = req.body
      const data = {
        name,
        startDate,
        endDate,
        description,
        location,
        createdBy: req.userData.userId,
      }
      const response = await this.repo.create<IEvent>(data)
      if (comments.length) {
        for (let i = 0; i < comments.length; i++) {
          const commentData = {
            eventId: response.id,
            comment: comments[i].comment,
            createdBy: req.userData.userId,
          }
          await this.commentRepo.create<IComment>(commentData)
        }
      }
      res.status(HTTP_OK).json(response)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  async updateEvent(req: Request, res: Response, next: NextFunction) {
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

  async deleteEvent(req: Request, res: Response, next: NextFunction) {
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

  async ValidateEventData(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body
      const schema = Joi.object()
        .options({ abortEarly: false })
        .keys({
          name: Joi.string().required().messages({
            'string.empty': 'Event Name is required',
          }),
          startDate: Joi.date().required().messages({
            'string.empty': 'Start Date is required',
          }),
          endDate: Joi.date().required().messages({
            'string.empty': 'End Date is required',
          }),
          location: Joi.string().allow('').allow(null),
          description: Joi.string().allow(''),
        })
      await schema.validateAsync(data)
      next()
    } catch (err) {
      returnFormattedValidationError(err, res)
    }
  }
}

export { EventController }
