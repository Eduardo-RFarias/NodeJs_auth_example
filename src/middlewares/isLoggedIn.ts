import { RequestHandler } from "express";
import HttpError from "http-errors";

const isLoggedIn: RequestHandler = async (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  throw new HttpError.Unauthorized("You are not logged in");
};

export default isLoggedIn;
