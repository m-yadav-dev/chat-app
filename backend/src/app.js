import express from "express";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import messagesRoutes from "./routes/messages.routes.js";
import { app } from "./library/socket.js";
import cors from "cors";
import { ENV_VARS } from "./library/env.js";




// Middlewares
app.use(
  cors({
    origin: ENV_VARS.CLIENT_URL,
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "15mb", extended: true }));

// Routes 
app.use("/api/auth", authRoutes);
app.use("/api/messages", messagesRoutes);

export default app;
