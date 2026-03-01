import "dotenv/config";

export const ENV_VARS = {
  MONGO_DB_CONN_STR: process.env.MONGO_DB_CONN_STR,
  JWT_SECRET: process.env.JWT_SECRET,
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
};

