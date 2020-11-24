import { Response } from 'express'
import jwt from 'jsonwebtoken'
import { HTTP_OK } from '../constants/HTTPStatusCode'
interface UserDataI {
  email: string
  id: number
}

export const generateJwtToken = (user: Partial<UserDataI>, res: Response) => {
  if (!user) {
    throw new Error()
  }
  const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET || 'thisWillChange', {
    expiresIn: process.env.EXPIRATION,
  })
  res.cookie('token', token, {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    secure: false, // set to true if using https
    httpOnly: true,
  })
  res.status(HTTP_OK).json({ token })
}
