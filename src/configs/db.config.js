const env = process.env;
const fs = require("fs");

const dbConfig = {
  host: env.DB_HOST,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  port: env.DB_PORT,
  /*ssl: {
    mode: "VERIFY_IDENTITY",
    ca: fs.readFileSync("/etc/ssl/cert.pem", "utf-8"),
  },*/
};

module.exports = dbConfig;
