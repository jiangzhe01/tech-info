// 获取全部
exports.getAllCategory = (req, res, next) => {
  try {
    res.send("获取全部");
  } catch (err) {
    next(err);
  }
};

// 获取某个
exports.getCategory = (req, res, next) => {
    try {
      res.send("获取全部");
    } catch (err) {
      next(err);
    }
  };

// 添加新的
exports.createCategory = (req, res, next) => {
  try {
    res.send("添加新的");
  } catch (err) {
    next(err);
  }
};

// 编辑某个
exports.updateCategory = (req, res, next) => {
  try {
    res.send("编辑某个");
  } catch (err) {
    next(err);
  }
};

// 删除某个
exports.deleteCategory = (req, res, next) => {
  try {
    res.send("删除某个");
  } catch (err) {
    next(err);
  }
};
