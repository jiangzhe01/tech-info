const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const config = require("./config/index");
const indexRouter = require("./routes/index");
require("./model");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

app.use("/api", indexRouter);

app.use(require("./middleware/error"));

app.listen(config.app.port, () => {
  console.log(`server is running at http://localhost:${config.app.port}`);
});
