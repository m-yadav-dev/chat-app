import express from "express";
import { signUp, login, logout, updateProfile} from "../controllers/auth.controller.js";
const route = express.Router();

route.post("/sign-up", signUp);
route.post("/login", login);
route.post("/logout", logout);
route.post("/update-profile", updateProfile);


export default route;
