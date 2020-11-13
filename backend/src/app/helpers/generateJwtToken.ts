import { Response } from 'express'
import jwt from 'jsonwebtoken'
import { HTTP_OK } from '../constants/HTTPStatusCode'
interface UserDataI {
  email: string
  id: number
}

export const generateJwtToken = (user: Partial<UserDataI>, res: Response) =>
  new Promise((resolve, reject) => {
    if (!user) {
      reject(new Error())
    }
    const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET || 'thisWillChange', {
      expiresIn: process.env.EXPIRATION,
    })
    resolve(
      res
        .cookie('token', token, {
          expires: new Date(Date.now() + 25200),
          secure: false, // set to true if using https
          httpOnly: true,
        })
        .status(HTTP_OK)
        .json({}),
    )
  })
