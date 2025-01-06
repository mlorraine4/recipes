const asyncHandler = require("express-async-handler");

exports.index_get = asyncHandler(async (req, res, next) => {
  return res.status(200).send("Implement home page");
});
