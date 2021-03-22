require('dotenv').config();

const ENV = process.env;

exports.CONFIG = {
  SERVER: {
    HOST_NAME: ENV.HOST,
    HOST_PORT: ENV.PORT
  },
  DATABASE: {
    DB_HOST: ENV.MONGO_HOST,
    DB_PORT: ENV.MONGO_PORT,
    DB_URL: ENV.MONGO_URL,
    DB_NAME: ENV.MONGO_DB,
    DB_USER: ENV.MONGO_USER,
    DB_PASS: ENV.MONGO_PASS
  },
}