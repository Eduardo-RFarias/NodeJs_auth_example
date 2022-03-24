import { Request, Response } from "express";
import User from "../models/User";

async function login(req: Request, res: Response) {
  return res.json(req.user);
}

async function logout(req: Request, res: Response) {
  req.logout();
  return res.status(204).send();
}

async function register(req: Request, res: Response) {
  const { cpf, name, password } = req.body;

  const user = new User();

  user.cpf = cpf;
  user.name = name;
  user.password = password;

  const savedInstance = await user.save();

  return res.status(201).json(savedInstance.toJSON());
}

export default {
  login,
  logout,
  register,
};
