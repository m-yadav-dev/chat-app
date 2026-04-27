import express from "express";
import {
  signUp,
  login,
  logout,
  updateProfile,
  checkAuth,
  guestLogin,
} from "../controllers/auth.controller.js";
import { protectedAuthRoute } from "../middlewares/arcjet.middleware.js";
import { authRouteMiddleware } from "../middlewares/auth.middleware.js";
const route = express.Router();

route.post("/guest-login", protectedAuthRoute, guestLogin);

route.post("/sign-up", protectedAuthRoute, signUp);
route.post("/login", protectedAuthRoute, login);
route.post("/logout", logout);
route.put("/update-profile", authRouteMiddleware, updateProfile);
route.get("/check", authRouteMiddleware, checkAuth);

export default route;
