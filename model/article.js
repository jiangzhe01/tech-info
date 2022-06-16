const mongoose = require("mongoose");
const Joi = require("joi");
Joi.ObjectId = require("joi-objectid")(Joi);

// 定义 article 结构
const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  content: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 200,
  },
  status: String,
  createdAT: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Article = mongoose.model("Article", articleSchema);

// 创建内容校验函数
function articleValidator(data) {
  const sechma = Joi.object().keys({
    title: Joi.string().min(2).max(50).required().messages({
      "string.base": "title 必须为 String",
      "string.max": "title 最多为 50个字符",
      "string.min": "title 最少 2个字符",
      "any.required": "缺少必选参数 title",
    }),
    content: Joi.string().min(2).max(200).required().messages({
      "string.base": "content 必须为 String",
      "string.max": "content 最多为 200个字符",
      "string.min": "content 最少 2个字符",
      "any.required": "缺少必选参数 content",
    }),
    status: Joi.string()
      .valid("published", "drafted", "trashed")
      .required()
      .messages({
        "string.base": "status 必须为字符串",
        "any.required": "status 必须设置",
        "any.only": "valid 取值有误, 可选值为published, drafted, trashed",
      }),
    category: Joi.ObjectId().required().messages({
      "string.pattern.name": "category 格式有误, 应为 ObjectId 格式",
      "any.required": "category 必须选择",
    }),
    author: Joi.ObjectId().required().messages({
      "string.pattern.name": "user 格式有误, 应为 ObjectId 格式",
      "any.required": "user 必须选择",
    }),
  });
  return sechma.validate(data);
}

module.exports = {
  Article,
  articleValidator,
};
