//logger.middleware.js

const path = require("path");
const fs = require("fs");

const logFilePath = path.join(__dirname, "..", "..", "logs", "requests.log");
const logStream = fs.createWriteStream(logFilePath, { flags: "a" });

const logger = (req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    const fullUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
    const log = `${req.method} ${fullUrl} - Status ${res.statusCode} (${duration}ms) - IP ${req.ip}\n`;
    logStream.write(log);
    console.log(log);
  });
  next();
};

module.exports = logger;
