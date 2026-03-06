import { authRouteMiddleware } from "../middlewares/auth.middleware.js";
import express from "express";
import multer from "multer";
import { getMessages, getUsers, sendMessage } from "../controllers/message.controller.js";
const route = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

route.get("/users", authRouteMiddleware, getUsers);
route.get("/:id", authRouteMiddleware, getMessages);
route.post("/send/:id", authRouteMiddleware, upload.single("media"), sendMessage);

export default route;
