const express = require("express");
const {register, login} = require("../../controllers/auth.controller");

const authRouter = express.Router();

// POST: /auth/register
authRouter.post("/register", register);

// POST: /auth/login
authRouter.post("/login", login);

module.exports = authRouter;