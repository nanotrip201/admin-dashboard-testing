const express = require("express");
const authRouter = require("./auth.route");
const userRouter = require("./user.route");
const masterRoutes = require("./masterData.route");

const routes = express.Router();

// @Path /auth
routes.use("/auth", authRouter);

// @Path /user
routes.use("/user", userRouter);

// @Path /masters
// Reroute all API request starting with "/masters" route
routes.use("/master", masterRoutes);

// @Path

// @Path

module.exports = routes;
