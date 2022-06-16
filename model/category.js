const mongoose = require("mongoose");
const Joi = require("joi");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
    minlength: 2,
  },
});

const Category = mongoose.model("Category", categorySchema);

// 定义校验函数
function categoryValidator(data) {
  const schema = Joi.object().keys({
    name: Joi.string().min(2).max(50).messages({
      "string.base": "name 必须为 String",
      "string.max": "name 最多为 50个字符",
      "string.min": "name 最少 2个字符",
      "any.required": "缺少必选参数 name",
    }),
  });
  return schema.validate(data);
}

module.exports = {
  // 导出model
  Category,
  // 导出校验函数
  categoryValidator,
};
