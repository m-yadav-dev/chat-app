import { authRouteMiddleware } from "../middlewares/auth.middleware.js";
import express from "express";
import { getMessages, getUsers, sendMessage } from "../controllers/message.controller.js";
const route = express.Router();

route.get("/users", authRouteMiddleware, getUsers);
route.get("/:id", authRouteMiddleware, getMessages);
route.post("/send/:id", authRouteMiddleware, sendMessage);

export default route;
