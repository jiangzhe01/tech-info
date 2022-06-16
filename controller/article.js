// 获取全部
// 如需获取某个分裂下的所有文章, 通过参数传递条件即可
exports.getAllArticle = (req, res, next) => {
  try {
    res.send("获取全部");
  } catch (err) {
    next(err);
  }
};

// 获取某个
exports.getArticle = (req, res, next) => {
  try {
    res.send("获取某个");
  } catch (err) {
    next(err);
  }
};

// 添加文章
exports.createArticle = (req, res, next) => {
  try {
    res.send("添加文章");
  } catch (err) {
    next(err);
  }
};

// 编辑文章
exports.updateArticle = (req, res, next) => {
  try {
    res.send("编辑文章");
  } catch (err) {
    next(err);
  }
};

// 删除文章
exports.deleteArticle = (req, res, next) => {
  try {
    res.send("删除文章");
  } catch (err) {
    next(err);
  }
};
