import { Router } from "express";
import controller from "../controllers/authController";
import authenticate from "../middlewares/authenticate";
import isLoggedIn from "../middlewares/isLoggedIn";

const router = Router();

router.post("/register", controller.register);
router.post("/login", authenticate, controller.login);
router.post("/logout", isLoggedIn, controller.logout);

export default router;
