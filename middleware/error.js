module.exports = (err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    status: 500,
    msg: "服务器错误",
  });
};
