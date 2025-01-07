const asyncHandler = require("express-async-handler");

exports.list_post = asyncHandler(async (req, res, next) => {
  return res.status(200).send("Implement post request to add user");
});

exports.user_get = asyncHandler(async (req, res, next) => {
  return res.status(200).send("Implement get user details");
});

exports.user_put = asyncHandler(async (req, res, next) => {
  return res.status(200).send("Implement update user details");
});

exports.user_delete = asyncHandler(async (req, res, next) => {
  return res.status(200).send("Implement delete user");
});
