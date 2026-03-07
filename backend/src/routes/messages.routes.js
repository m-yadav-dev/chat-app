import { authRouteMiddleware } from "../middlewares/auth.middleware.js";
import express from "express";
import multer from "multer";
import { getMessages, getUsers, sendMessage } from "../controllers/message.controller.js";
import { protectMessageRoute } from "../middlewares/arcjet.middleware.js";
const route = express.Router();

route.use(authRouteMiddleware);

const upload = multer({ storage: multer.memoryStorage() });
route.get("/users",  getUsers);
route.get("/:id",  getMessages);
route.post("/send/:id", protectMessageRoute, upload.single("media"), sendMessage);

export default route;
