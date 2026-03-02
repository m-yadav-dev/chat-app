import { User } from "../models/user.model.js";
import { ENV_VARS } from "../library/env.js";
import jwt from "jsonwebtoken";

export const authRouteMiddleware = async (request, response, next) => {
  try {
    const token = request.cookies.token;
    if (!token) {
      return response.status(401).json({
        message: "Unauthorized - No token provided",
      });
    }

    const decoded = jwt.verify(token, ENV_VARS.JWT_SECRET);
    if (!decoded) {
      return response.status(401).json({
        message: "Unauthorized - Invalid token",
      });
    }

    const user = await User.findById(decoded.userId);
    if (!user) {
      return response.status(401).json({
        message: "Unauthorized - User not found",
      });
    }
    request.user = user;
    next();
  } catch (error) {
    return response.status(401).json({
      message: "Unauthorized - Invalid token",
    });
  }
};
