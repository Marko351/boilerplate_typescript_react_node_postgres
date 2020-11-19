import { IAuthUser } from '../helpers/isAuth'

export {}

declare global {
  namespace Express {
    export interface Request {
      userData: IAuthUser
    }
  }
}
