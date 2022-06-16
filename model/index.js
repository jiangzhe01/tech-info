const mongoose = require("mongoose");

const config = require("../config");

mongoose.connect(config.db.url);

const db = mongoose.connection;

db.on("error", (err) => {
  console.log("连接失败" + err);
});

db.on("open", () => {
  console.log("连接成功");
});
