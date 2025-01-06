const asyncHandler = require("express-async-handler");

// TODO: implement optional header search requests (ie tag name korean)
exports.list_get = asyncHandler(async (req, res, next) => {
  return res.status(200).send("Implement get list of all recipes");
});

exports.list_post = asyncHandler(async (req, res, next) => {
  return res.status(200).send("Implement post request to add recipe");
});

exports.recipe_get = asyncHandler(async (req, res, next) => {
  return res.status(200).send("Implement get recipe");
});

exports.recipe_put = asyncHandler(async (req, res, next) => {
  return res.status(200).send("Implement update recipe");
});

exports.recipe_delete = asyncHandler(async (req, res, next) => {
  return res.status(200).send("Implement delete recipe");
});
