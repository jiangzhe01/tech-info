const express = require("express");

const userRouter = require("./user");
const authRouter = require("./auth");
const categoryRouter = require("./category");
const articleRouter = require("./article");

const router = express.Router();

router.use("/user", userRouter);
router.use("/auth", authRouter);
router.use("/category", categoryRouter);
router.use("/article", articleRouter);

module.exports = router;
