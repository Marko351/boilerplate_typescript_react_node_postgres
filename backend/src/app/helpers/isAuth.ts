import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { HTTP_UNAUTHORIZED } from '../constants/HTTPStatusCode'
import { returnFormattedError } from './formattedError'

export interface IAuthUser {
  exp: number
  iat: number
  userId: number | null
  email: string
}

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token || ''
  try {
    if (!token) {
      return returnFormattedError('auth', 'Authentication failed, please login', HTTP_UNAUTHORIZED, res)
    }
    const decoded = await jwt.verify<IAuthUser>(token, process.env.JWT_SECRET || 'thisWillChange')
    const now = Date.now() / 1000
    // console.log(decoded)
    if (decoded.exp < now) {
      return returnFormattedError('auth', 'Authentication token expired, please relogin', HTTP_UNAUTHORIZED, res)
    }
    req.userData = <IAuthUser>decoded
    next()
  } catch (err) {
    return res.status(500).json(err.toString())
  }
}
