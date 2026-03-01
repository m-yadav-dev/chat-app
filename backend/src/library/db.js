import mongoose from "mongoose";

const connectDb = async () => {
  try {
    if (!process.env.MONGO_DB_CONN_STR) {
      throw new Error("MongoDB connection string is not defined");
    }
    const dbConnection = await mongoose.connect(process.env.MONGO_DB_CONN_STR);
    console.log(`MongoDB connected: ${dbConnection.connection.host}`);
  } catch (error) { 
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDb;

