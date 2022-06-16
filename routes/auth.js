const express = require("express");

const auth = require("../controller/auth");

const { userValidator } = require("../model/user");
const validate = require("../middleware/validate");

const router = express.Router();

// 登录
router.post("/", validate(userValidator), auth.login);

module.exports = router;
