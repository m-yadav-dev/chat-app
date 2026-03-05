import express from "express";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import messagesRoutes from "./routes/messages.routes.js";
const app = express();

app.use(cookieParser());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "15mb", extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/messages", messagesRoutes);


app.get("/", (req, res) => {
  res.send("Hello World");
});

export default app;
