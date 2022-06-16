const express = require("express");

const categoryController = require('../controller/category')
const { categoryValidator } = require("../model/category");
const validate = require("../middleware/validate");

const router = express.Router();

// 获取全部
router.get("/", categoryController.getAllCategory);

// 获取某个
router.get("/:cid", categoryController.getCategory);

// 添加新的
router.post("/", validate(categoryValidator), categoryController.createCategory);

// 编辑某个
router.put("/:cid", validate(categoryValidator), categoryController.updateCategory);

// 删除某个
router.delete("/:cid", categoryController.deleteCategory);

module.exports = router;
