import { NextFunction, Request, Response } from 'express'
import Joi from 'joi'
import argon2 from 'argon2'

import { HTTP_VALIDATION_ERROR } from '../../constants/HTTPStatusCode'
import { returnFormattedError, returnFormattedValidationError } from '../../helpers/formattedError'
import { AuthenticationRepository } from './repository'
import { generateJwtToken } from '../../helpers/generateJwtToken'
import { IUser } from '../../types/Users/User'
class AuthenticationController {
  public repo: AuthenticationRepository
  constructor() {
    this.repo = new AuthenticationRepository()
  }
  async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password, username } = req.body
      const isUserEmailExists = await this.repo.getByField('email', email)
      if (isUserEmailExists.length > 0) {
        return returnFormattedError('email', 'User with that email already created', HTTP_VALIDATION_ERROR, res)
      }
      const isUserUsernameExists = await this.repo.getByField('username', username)
      if (isUserUsernameExists.length > 0) {
        return returnFormattedError('username', 'User with that username already created', HTTP_VALIDATION_ERROR, res)
      }
      const hashedPassword = await argon2.hash(password)
      const data = {
        email: email,
        password: hashedPassword,
        username: username,
      }
      const user: IUser[] = await this.repo.create<IUser>(data)
      if (user[0]) {
        await generateJwtToken(user[0], res)
      } else {
        throw new Error()
      }
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { password, usernameOrEmail } = req.body
      const field = usernameOrEmail.includes('@') ? 'email' : 'username'
      const user: IUser[] = await this.repo.getByField<IUser>(field, usernameOrEmail)
      if (user.length === 0) {
        return returnFormattedError(
          'usernameOrEmail',
          'User with that email or username does not exists',
          HTTP_VALIDATION_ERROR,
          res,
        )
      }
      const isValidPassword = await argon2.verify(user[0].password, password)
      if (!isValidPassword) {
        return returnFormattedError('password', 'Password is incorect', HTTP_VALIDATION_ERROR, res)
      }
      await generateJwtToken(user[0], res)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  async ValidateAuthRegister(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body
      const schema = Joi.object()
        .options({ abortEarly: false })
        .keys({
          email: Joi.string().email({ minDomainSegments: 2 }).required().messages({
            'string.email': 'Email must be a valid email',
            'any.required': 'Email is required',
          }),
          password: Joi.string().min(3).message('too short (minimum 3 character)').max(50).required().messages({
            'string.min': 'too short (minimum 3 character)',
            'string.max': 'too long (maximum 3 character)',
            'any.required': 'Password is required',
          }),
          username: Joi.string()
            .regex(/^[a-z0-9\d\-_\s]+$/i)
            .required()
            .messages({
              'string.pattern.base':
                'Username don`t allowed. Please enter username that matches following pattern (Letters, Numbers, -, _, ` `)',
              'any.required': 'Username is required',
            }),
        })
      await schema.validateAsync(data)
      next()
    } catch (err) {
      console.log(err)
      returnFormattedValidationError(err, res)
    }
  }

  async ValidateAuthLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body
      const schema = Joi.alternatives().try(
        Joi.object()
          .options({ abortEarly: false })
          .keys({
            password: Joi.string().required().messages({
              'any.required': 'Password is required',
            }),
            usernameOrEmail: Joi.string().required().messages({
              'any.required': 'Username or email is required',
            }),
          }),
      )
      await schema.validateAsync(data)
      next()
    } catch (err) {
      returnFormattedValidationError(err, res)
    }
  }
}

export { AuthenticationController }
