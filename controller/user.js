const bcrypt = require("bcrypt");

const { User } = require("../model/user");

// 注册用户
exports.registerUser = async (req, res, next) => {
  try {
    let { email, password, name } = req.validValue;
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        status: 400,
        msg: "邮箱已注册",
        data: { email },
      });
    }
    console.log(user);
    // 密码加密
    let salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);

    user = new User({
      email,
      password,
      name,
    });

    await user.save();

    res.status(200).json({
      status: 200,
      msg: "注册成功",
      data: { email },
    });
  } catch (err) {
    next(err);
  }
};

// 获取用户
exports.getUser = (req, res, next) => {
  try {
    res.send("获取用户");
  } catch (err) {
    next(err);
  }
};

// 编辑用户
exports.updateUser = (req, res, next) => {
  try {
    res.send("编辑用户");
  } catch (err) {
    next(err);
  }
};

// 删除用户
exports.deleteUser = (req, res, next) => {
  try {
    res.send("删除用户");
  } catch (err) {
    next(err);
  }
};
