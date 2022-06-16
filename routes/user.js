const express = require("express");

const userController = require("../controller/user");
const { userValidator } = require("../model/user");
const validator = require("../middleware/validate");

const router = express.Router();

// 注册用户
router.post("/", validator(userValidator), userController.registerUser);

// 获取用户
router.get("/", userController.getUser);

// 编辑用户
router.put("/", validator(userValidator), userController.updateUser);

// 删除用户
router.delete("/", userController.deleteUser);

module.exports = router;
