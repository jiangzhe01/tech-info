const express = require("express");

const articleController = require("../controller/article");
const { articleValidator } = require("../model/article");
const validate = require("../middleware/validate");

const router = express.Router();

// 获取全部
// 如需获取某个分裂下的所有文章, 通过参数传递条件即可
router.get("/articles", articleController.getAllArticle);

// 获取某个
router.get("/:articleId", articleController.getArticle);

// 添加文章
router.post("/", validate(articleValidator), articleController.createArticle);

// 编辑文章
router.put(
  "/:articleId",
  validate(articleValidator),
  articleController.updateArticle
);

// 删除文章
router.delete("/:articleId", articleController.deleteArticle);

module.exports = router;
