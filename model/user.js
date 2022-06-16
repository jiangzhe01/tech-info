const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 50,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
});

const User = mongoose.model("User", userSchema);

// 校验
function userValidator(data) {
  const schema = Joi.object().keys({
    email: Joi.string().email().trim().lowercase().required().messages({
      "any.required": "缺少必选参数 email",
      "string.email": "email 格式错误",
    }),
    name: Joi.string().min(2).max(50).required().messages({
      "string.base": "name 必须为 String",
      "string.max": "name 最多为 50个字符",
      "string.min": "name 最少 2个字符",
      "any.required": "缺少必选参数 name",
    }),
    password: Joi.string()
      .pattern(/^[a-zA-z0-9]{6,12}$/)
      .exist()
      .messages({
        "any.required": "缺少必选参数 password",
        "string.pattern.base": "密码不符合规则",
      }),
  });
  return schema.validate(data);
}

module.exports = { User, userValidator };
