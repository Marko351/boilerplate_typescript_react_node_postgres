import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { HTTP_UNAUTHORIZED } from '../constants/HTTPStatusCode'
import { returnFormattedError } from './formattedError'

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token || ''
  try {
    if (!token) {
      returnFormattedError('auth', 'Authentication failed, please login', HTTP_UNAUTHORIZED, res)
    }
    const decoded = await jwt.verify(token, process.env.JWT_SECRET || 'thisWillChange')
    req.userData = <{ [key: string]: string | number | boolean }>decoded
    next()
  } catch (err) {
    return res.status(500).json(err.toString())
  }
}
