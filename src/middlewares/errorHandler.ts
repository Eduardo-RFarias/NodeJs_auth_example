import { ErrorRequestHandler } from "express";
import HttpError from "http-errors";
import { QueryFailedError } from "typeorm";
import ValidationError from "../errors/ValidationError";

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  if (error instanceof ValidationError) {
    const errorWrapper = new HttpError.BadRequest(error.message);
    errorWrapper.stack = error.stack;
    return next(errorWrapper);
  }

  if (
    error instanceof QueryFailedError &&
    error.message.startsWith("SQLITE_CONSTRAINT")
  ) {
    const errorWrapper = new HttpError.BadRequest(error.message);
    errorWrapper.stack = error.stack;
    return next(errorWrapper);
  }

  return next(error);
};

export default errorHandler;
