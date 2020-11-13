import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import Joi from 'joi'

import { AuthValidationKeys } from '../../types/Authentication/Auth.t'
import { HTTP_CREATED } from '../../constants/HTTPStatusCode'
import { returnFormattedValidationError } from '../../helpers/formattedError'
import { AuthenticationRepository } from './repository'
class AuthenticationController {
  public repo: AuthenticationRepository
  constructor() {
    this.repo = new AuthenticationRepository()
  }
  async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body
      console.log('object')
      const response = await this.repo.create({})
      res.status(HTTP_CREATED).json(response)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).json('success')
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  async ValidateAuth(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body
      const schema = Joi.object()
        .options({ abortEarly: false })
        .keys({
          email: Joi.string().email({ minDomainSegments: 2 }).required(),
          password: Joi.string().alphanum().min(3).max(50).required(),
        })
      await schema.validateAsync(data)
      next()
    } catch (err) {
      returnFormattedValidationError(err, res)
    }
  }

  generateToken(user: any) {
    return new Promise((resolve, reject) => {
      if (!user) {
        reject(new Error())
      }
      const token = jwt.sign(
        {
          userId: user.id,
          email: user.email,
          name: user.name,
        },
        process.env.JWT_SECRET || 'thisWillChange',
        { expiresIn: '999999 days' },
      )
      resolve(token)
    })
  }
}

export { AuthenticationController }

// app.post("/login", (req, res) => {
//   const user = req.body.user;
//   console.log(user);

//   if (!user) {
//       return res.status(404).json({ message: "Body empty" });
//   }

//   let accessToken = jwt.sign(user, "access", { expiresIn: "2s" });
//   let refreshToken = jwt.sign(user, "refresh", { expiresIn: "7d" });
//   refreshTokens.push(refreshToken);

//   return res.status(201).json({
//       accessToken,
//       refreshToken
//   });
// });
