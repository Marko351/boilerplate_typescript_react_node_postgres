import { Response } from 'express'
import { ValidationError, ValidationErrorItem } from 'joi'
import { HTTP_VALIDATION_ERROR } from '../constants/HTTPStatusCode'

interface Errors {
  [key: string]: string
}

export const returnFormattedValidationError = (errorsParam: ValidationError, res: Response) => {
  const errors: Errors = {}
  errorsParam.details.forEach((error: ValidationErrorItem) => {
    errors[error.context?.label as string] = error.message
  })
  return res.status(HTTP_VALIDATION_ERROR).json(errors)
}