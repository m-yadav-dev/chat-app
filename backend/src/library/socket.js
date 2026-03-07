import { Server } from "socket.io";
import http from "http";
import express from "express";
import { ENV_VARS } from "./env.js";
import { socketAuthMiddleware } from "../middlewares/socket.middleware.js";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: [ENV_VARS.CLIENT_URL],
    methods: ["GET", "POST"],
  },
});

io.use(socketAuthMiddleware);

const userSocketMap = {};

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

io.on("connection", (socket) => {
  console.log(`🟢 A user connected. Socket ID: ${socket.id}`);

  const userId = socket.handshake.query.userId;
  if (userId && userId !== undefined) {
    userSocketMap[userId] = socket.id;
    console.log(`😃 User ${userId} mapped to socket ${socket.id}`);
  }

  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log(`🔴 A user disconnected, Socket ID: ${socket.id}`);

    if (userId) {
      delete userSocketMap[userId];
    }

    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { io, app, server };
