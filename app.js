//app.js

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const mailRouter = require("./src/routes/mail.route");
const sqlCrudRouter = require("./src/routes/sqlCrud.route");
const logger = require("./src/middlewares/logger.middleware");
const errorHandler = require("./src/middlewares/errorHandler.middleware");
const app = express();

app.use("/static", express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(logger);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/mail", mailRouter);

app.use("/db", sqlCrudRouter);

app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
