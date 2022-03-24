import { RequestHandler } from "express";
import passport from "../services/authService";

const authenticate: RequestHandler = passport.authenticate("local", {});

export default authenticate;
