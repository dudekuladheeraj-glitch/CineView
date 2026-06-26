import type { ZodError } from 'zod'

export class TmdbApiError extends Error {
  statusCode: number

  constructor(message: string, statusCode: number) {
    super(message)
    this.name = 'TmdbApiError'
    this.statusCode = statusCode
  }
}

export class TmdbValidationError extends Error {
  cause?: ZodError

  constructor(message: string, cause?: ZodError) {
    super(message)
    this.name = 'TmdbValidationError'
    this.cause = cause
  }
}
