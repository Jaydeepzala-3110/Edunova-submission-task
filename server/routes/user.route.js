import { Router } from "express";
import { SignUp, SignIn } from "../controller/user.controller.js";

const router = Router();

router.post("/register", SignUp);

router.post("/login", SignIn);

export default router;