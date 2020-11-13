export {}

declare global {
  namespace Express {
    export interface Request {
      userData: { [key: string]: string | number | boolean }
    }
  }
}
