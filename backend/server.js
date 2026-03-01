import dotenv from "dotenv";
import connectDb from "./src/library/db.js";
import app from "./src/app.js";
import { ENV_VARS } from "./src/library/env.js";
dotenv.config();

const PORT = ENV_VARS.PORT || 5000;

const startServer = async () => {
  try {
    await connectDb();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

startServer();
