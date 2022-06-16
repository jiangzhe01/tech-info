const bcrypt = require("bcrypt");

const { User } = require("../model/user");

// 登录
exports.login = async (req, res, next) => {
  try {
    const validValue = req.validValue;

    let user = await User.findOne({ email: validValue.email });
    if (!user) {
      return res.status(400).json({
        code: 400,
        msg: "用户名或密码错误",
      });
    }
    const compareResult = await bcrypt.compare(
      validValue.password,
      user.password
    );
    if (!compareResult) {
      return res.status(400).json({
        code: 400,
        msg: "用户名或密码错误",
      });
    }

    res.status(200).json({
      code: 200,
      msg: "登录成功",
    });
  } catch (err) {
    next(err);
  }
};
